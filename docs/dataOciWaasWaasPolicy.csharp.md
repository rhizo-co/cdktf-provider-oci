# `dataOciWaasWaasPolicy` Submodule <a name="`dataOciWaasWaasPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasWaasPolicy <a name="DataOciWaasWaasPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy oci_waas_waas_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicy(Construct Scope, string Id, DataOciWaasWaasPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig">DataOciWaasWaasPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig">DataOciWaasWaasPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWaasWaasPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaasWaasPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaasWaasPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasWaasPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains">AdditionalDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups">OriginGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins">Origins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig">PolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig">WafConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput">WaasPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId">WaasPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdditionalDomains`<sup>Required</sup> <a name="AdditionalDomains" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains"></a>

```csharp
public string[] AdditionalDomains { get; }
```

- *Type:* string[]

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups"></a>

```csharp
public DataOciWaasWaasPolicyOriginGroupsList OriginGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins"></a>

```csharp
public DataOciWaasWaasPolicyOriginsList Origins { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a>

---

##### `PolicyConfig`<sup>Required</sup> <a name="PolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig"></a>

```csharp
public DataOciWaasWaasPolicyPolicyConfigList PolicyConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigList WafConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WaasPolicyIdInput`<sup>Optional</sup> <a name="WaasPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput"></a>

```csharp
public string WaasPolicyIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WaasPolicyId`<sup>Required</sup> <a name="WaasPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId"></a>

```csharp
public string WaasPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasWaasPolicyConfig <a name="DataOciWaasWaasPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WaasPolicyId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId">WaasPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WaasPolicyId`<sup>Required</sup> <a name="WaasPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId"></a>

```csharp
public string WaasPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciWaasWaasPolicyOriginGroups <a name="DataOciWaasWaasPolicyOriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginGroups {

};
```


### DataOciWaasWaasPolicyOriginGroupsOriginGroup <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginGroupsOriginGroup {

};
```


### DataOciWaasWaasPolicyOrigins <a name="DataOciWaasWaasPolicyOrigins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOrigins {

};
```


### DataOciWaasWaasPolicyOriginsCustomHeaders <a name="DataOciWaasWaasPolicyOriginsCustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginsCustomHeaders {

};
```


### DataOciWaasWaasPolicyPolicyConfig <a name="DataOciWaasWaasPolicyPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfig {

};
```


### DataOciWaasWaasPolicyPolicyConfigHealthChecks <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigHealthChecks {

};
```


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod {

};
```


### DataOciWaasWaasPolicyWafConfig <a name="DataOciWaasWaasPolicyWafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfig {

};
```


### DataOciWaasWaasPolicyWafConfigAccessRules <a name="DataOciWaasWaasPolicyWafConfigAccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRules {

};
```


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesCriteria {

};
```


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation {

};
```


### DataOciWaasWaasPolicyWafConfigAddressRateLimiting <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAddressRateLimiting {

};
```


### DataOciWaasWaasPolicyWafConfigCachingRules <a name="DataOciWaasWaasPolicyWafConfigCachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCachingRules {

};
```


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCachingRulesCriteria {

};
```


### DataOciWaasWaasPolicyWafConfigCaptchas <a name="DataOciWaasWaasPolicyWafConfigCaptchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCaptchas {

};
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRules <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCustomProtectionRules {

};
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions {

};
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge {

};
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings {

};
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge {

};
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings {

};
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader {

};
```


### DataOciWaasWaasPolicyWafConfigJsChallenge <a name="DataOciWaasWaasPolicyWafConfigJsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallenge {

};
```


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings {

};
```


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteria <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeCriteria {

};
```


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader {

};
```


### DataOciWaasWaasPolicyWafConfigProtectionSettings <a name="DataOciWaasWaasPolicyWafConfigProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigProtectionSettings {

};
```


### DataOciWaasWaasPolicyWafConfigWhitelists <a name="DataOciWaasWaasPolicyWafConfigWhitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigWhitelists {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasWaasPolicyOriginGroupsList <a name="DataOciWaasWaasPolicyOriginGroupsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get"></a>

```csharp
private DataOciWaasWaasPolicyOriginGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupList <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginGroupsOriginGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get"></a>

```csharp
private DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyOriginGroupsOriginGroup InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a>

---


### DataOciWaasWaasPolicyOriginGroupsOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup">OriginGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup"></a>

```csharp
public DataOciWaasWaasPolicyOriginGroupsOriginGroupList OriginGroup { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyOriginGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a>

---


### DataOciWaasWaasPolicyOriginsCustomHeadersList <a name="DataOciWaasWaasPolicyOriginsCustomHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginsCustomHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get"></a>

```csharp
private DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference <a name="DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyOriginsCustomHeaders InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a>

---


### DataOciWaasWaasPolicyOriginsList <a name="DataOciWaasWaasPolicyOriginsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get"></a>

```csharp
private DataOciWaasWaasPolicyOriginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginsOutputReference <a name="DataOciWaasWaasPolicyOriginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyOriginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders">CustomHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders"></a>

```csharp
public DataOciWaasWaasPolicyOriginsCustomHeadersList CustomHeaders { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a>

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyOrigins InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a>

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksList <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigHealthChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get"></a>

```csharp
private DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup">ExpectedResponseCodeGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText">ExpectedResponseText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers">Headers</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled">IsResponseTextCheckEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpectedResponseCodeGroup`<sup>Required</sup> <a name="ExpectedResponseCodeGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup"></a>

```csharp
public string[] ExpectedResponseCodeGroup { get; }
```

- *Type:* string[]

---

##### `ExpectedResponseText`<sup>Required</sup> <a name="ExpectedResponseText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText"></a>

```csharp
public string ExpectedResponseText { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers"></a>

```csharp
public StringMap Headers { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsResponseTextCheckEnabled`<sup>Required</sup> <a name="IsResponseTextCheckEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled"></a>

```csharp
public IResolvable IsResponseTextCheckEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyPolicyConfigHealthChecks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a>

---


### DataOciWaasWaasPolicyPolicyConfigList <a name="DataOciWaasWaasPolicyPolicyConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get"></a>

```csharp
private DataOciWaasWaasPolicyPolicyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get"></a>

```csharp
private DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds">ExpirationTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ExpirationTimeInSeconds`<sup>Required</sup> <a name="ExpirationTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds"></a>

```csharp
public double ExpirationTimeInSeconds { get; }
```

- *Type:* double

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

---


### DataOciWaasWaasPolicyPolicyConfigOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyPolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup">CipherGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader">ClientAddressHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn">IsBehindCdn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected">IsCacheControlRespected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled">IsHttpsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced">IsHttpsForced</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled">IsOriginCompressionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled">IsResponseBufferingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled">IsSniEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod">LoadBalancingMethod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols">TlsProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes">WebsocketPathPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `CipherGroup`<sup>Required</sup> <a name="CipherGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup"></a>

```csharp
public string CipherGroup { get; }
```

- *Type:* string

---

##### `ClientAddressHeader`<sup>Required</sup> <a name="ClientAddressHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader"></a>

```csharp
public string ClientAddressHeader { get; }
```

- *Type:* string

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks"></a>

```csharp
public DataOciWaasWaasPolicyPolicyConfigHealthChecksList HealthChecks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a>

---

##### `IsBehindCdn`<sup>Required</sup> <a name="IsBehindCdn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn"></a>

```csharp
public IResolvable IsBehindCdn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsCacheControlRespected`<sup>Required</sup> <a name="IsCacheControlRespected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected"></a>

```csharp
public IResolvable IsCacheControlRespected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHttpsEnabled`<sup>Required</sup> <a name="IsHttpsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled"></a>

```csharp
public IResolvable IsHttpsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHttpsForced`<sup>Required</sup> <a name="IsHttpsForced" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced"></a>

```csharp
public IResolvable IsHttpsForced { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsOriginCompressionEnabled`<sup>Required</sup> <a name="IsOriginCompressionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled"></a>

```csharp
public IResolvable IsOriginCompressionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsResponseBufferingEnabled`<sup>Required</sup> <a name="IsResponseBufferingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled"></a>

```csharp
public IResolvable IsResponseBufferingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSniEnabled`<sup>Required</sup> <a name="IsSniEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled"></a>

```csharp
public IResolvable IsSniEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LoadBalancingMethod`<sup>Required</sup> <a name="LoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod"></a>

```csharp
public DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList LoadBalancingMethod { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a>

---

##### `TlsProtocols`<sup>Required</sup> <a name="TlsProtocols" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols"></a>

```csharp
public string[] TlsProtocols { get; }
```

- *Type:* string[]

---

##### `WebsocketPathPrefixes`<sup>Required</sup> <a name="WebsocketPathPrefixes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes"></a>

```csharp
public string[] WebsocketPathPrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyPolicyConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive"></a>

```csharp
public IResolvable IsCaseSensitive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAccessRulesCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges">BypassChallenges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode">RedirectResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation">ResponseHeaderManipulation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `BypassChallenges`<sup>Required</sup> <a name="BypassChallenges" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges"></a>

```csharp
public string[] BypassChallenges { get; }
```

- *Type:* string[]

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList Criteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedirectResponseCode`<sup>Required</sup> <a name="RedirectResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode"></a>

```csharp
public string RedirectResponseCode { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `ResponseHeaderManipulation`<sup>Required</sup> <a name="ResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList ResponseHeaderManipulation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAccessRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a>

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingList <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAddressRateLimitingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress">AllowedRatePerAddress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress">MaxDelayedCountPerAddress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRatePerAddress`<sup>Required</sup> <a name="AllowedRatePerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress"></a>

```csharp
public double AllowedRatePerAddress { get; }
```

- *Type:* double

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxDelayedCountPerAddress`<sup>Required</sup> <a name="MaxDelayedCountPerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress"></a>

```csharp
public double MaxDelayedCountPerAddress { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAddressRateLimiting InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCachingRulesCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCachingRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration">CachingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration">ClientCachingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled">IsClientCachingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CachingDuration`<sup>Required</sup> <a name="CachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration"></a>

```csharp
public string CachingDuration { get; }
```

- *Type:* string

---

##### `ClientCachingDuration`<sup>Required</sup> <a name="ClientCachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration"></a>

```csharp
public string ClientCachingDuration { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList Criteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a>

---

##### `IsClientCachingEnabled`<sup>Required</sup> <a name="IsClientCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled"></a>

```csharp
public IResolvable IsClientCachingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCachingRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a>

---


### DataOciWaasWaasPolicyWafConfigCaptchasList <a name="DataOciWaasWaasPolicyWafConfigCaptchasList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCaptchasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigCaptchasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCaptchasOutputReference <a name="DataOciWaasWaasPolicyWafConfigCaptchasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCaptchasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds">SessionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel">SubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `SessionExpirationInSeconds`<sup>Required</sup> <a name="SessionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds"></a>

```csharp
public double SessionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `SubmitLabel`<sup>Required</sup> <a name="SubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel"></a>

```csharp
public string SubmitLabel { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCaptchas InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList Exclusions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCustomProtectionRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount">MaxAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds">MaxAddressCountExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds"></a>

```csharp
public double ActionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList ChallengeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```csharp
public double FailureThresholdExpirationInSeconds { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxAddressCount`<sup>Required</sup> <a name="MaxAddressCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount"></a>

```csharp
public double MaxAddressCount { get; }
```

- *Type:* double

---

##### `MaxAddressCountExpirationInSeconds`<sup>Required</sup> <a name="MaxAddressCountExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds"></a>

```csharp
public double MaxAddressCountExpirationInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold">InteractionThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds">RecordingPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds"></a>

```csharp
public double ActionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList ChallengeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```csharp
public double FailureThresholdExpirationInSeconds { get; }
```

- *Type:* double

---

##### `InteractionThreshold`<sup>Required</sup> <a name="InteractionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold"></a>

```csharp
public double InteractionThreshold { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled"></a>

```csharp
public IResolvable IsNatEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RecordingPeriodInSeconds`<sup>Required</sup> <a name="RecordingPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds"></a>

```csharp
public double RecordingPeriodInSeconds { get; }
```

- *Type:* double

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList SetHttpHeader { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```csharp
public string CaptchaFooter { get; }
```

- *Type:* string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```csharp
public string CaptchaHeader { get; }
```

- *Type:* string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```csharp
public string CaptchaSubmitLabel { get; }
```

- *Type:* string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```csharp
public string CaptchaTitle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive"></a>

```csharp
public IResolvable IsCaseSensitive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallengeCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged">AreRedirectsChallenged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds"></a>

```csharp
public double ActionExpirationInSeconds { get; }
```

- *Type:* double

---

##### `AreRedirectsChallenged`<sup>Required</sup> <a name="AreRedirectsChallenged" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged"></a>

```csharp
public IResolvable AreRedirectsChallenged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList ChallengeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList Criteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a>

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled"></a>

```csharp
public IResolvable IsNatEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList SetHttpHeader { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallenge InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigList <a name="DataOciWaasWaasPolicyWafConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigOutputReference <a name="DataOciWaasWaasPolicyWafConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules">AccessRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting">AddressRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules">CachingRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas">Captchas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules">CustomProtectionRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge">DeviceFingerprintChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge">HumanInteractionChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge">JsChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups">OriginGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings">ProtectionSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists">Whitelists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAccessRulesList AccessRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a>

---

##### `AddressRateLimiting`<sup>Required</sup> <a name="AddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigAddressRateLimitingList AddressRateLimiting { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a>

---

##### `CachingRules`<sup>Required</sup> <a name="CachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCachingRulesList CachingRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a>

---

##### `Captchas`<sup>Required</sup> <a name="Captchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCaptchasList Captchas { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a>

---

##### `CustomProtectionRules`<sup>Required</sup> <a name="CustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList CustomProtectionRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a>

---

##### `DeviceFingerprintChallenge`<sup>Required</sup> <a name="DeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList DeviceFingerprintChallenge { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a>

---

##### `HumanInteractionChallenge`<sup>Required</sup> <a name="HumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList HumanInteractionChallenge { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a>

---

##### `JsChallenge`<sup>Required</sup> <a name="JsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigJsChallengeList JsChallenge { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups"></a>

```csharp
public string[] OriginGroups { get; }
```

- *Type:* string[]

---

##### `ProtectionSettings`<sup>Required</sup> <a name="ProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigProtectionSettingsList ProtectionSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a>

---

##### `Whitelists`<sup>Required</sup> <a name="Whitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigWhitelistsList Whitelists { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a>

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsList <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigProtectionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected">IsResponseInspected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount">MaxArgumentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument">MaxNameLengthPerArgument</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB">MaxResponseSizeInKiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments">MaxTotalNameLengthOfArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes">MediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays">RecommendationsPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; }
```

- *Type:* string[]

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction"></a>

```csharp
public string BlockAction { get; }
```

- *Type:* string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode"></a>

```csharp
public string BlockErrorPageCode { get; }
```

- *Type:* string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription"></a>

```csharp
public string BlockErrorPageDescription { get; }
```

- *Type:* string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage"></a>

```csharp
public string BlockErrorPageMessage { get; }
```

- *Type:* string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode"></a>

```csharp
public double BlockResponseCode { get; }
```

- *Type:* double

---

##### `IsResponseInspected`<sup>Required</sup> <a name="IsResponseInspected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected"></a>

```csharp
public IResolvable IsResponseInspected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxArgumentCount`<sup>Required</sup> <a name="MaxArgumentCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount"></a>

```csharp
public double MaxArgumentCount { get; }
```

- *Type:* double

---

##### `MaxNameLengthPerArgument`<sup>Required</sup> <a name="MaxNameLengthPerArgument" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument"></a>

```csharp
public double MaxNameLengthPerArgument { get; }
```

- *Type:* double

---

##### `MaxResponseSizeInKiB`<sup>Required</sup> <a name="MaxResponseSizeInKiB" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB"></a>

```csharp
public double MaxResponseSizeInKiB { get; }
```

- *Type:* double

---

##### `MaxTotalNameLengthOfArguments`<sup>Required</sup> <a name="MaxTotalNameLengthOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments"></a>

```csharp
public double MaxTotalNameLengthOfArguments { get; }
```

- *Type:* double

---

##### `MediaTypes`<sup>Required</sup> <a name="MediaTypes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes"></a>

```csharp
public string[] MediaTypes { get; }
```

- *Type:* string[]

---

##### `RecommendationsPeriodInDays`<sup>Required</sup> <a name="RecommendationsPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays"></a>

```csharp
public double RecommendationsPeriodInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigProtectionSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a>

---


### DataOciWaasWaasPolicyWafConfigWhitelistsList <a name="DataOciWaasWaasPolicyWafConfigWhitelistsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigWhitelistsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get"></a>

```csharp
private DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference <a name="DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists">AddressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists"></a>

```csharp
public string[] AddressLists { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue"></a>

```csharp
public DataOciWaasWaasPolicyWafConfigWhitelists InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a>

---



