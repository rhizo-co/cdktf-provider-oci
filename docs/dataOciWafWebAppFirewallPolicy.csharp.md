# `dataOciWafWebAppFirewallPolicy` Submodule <a name="`dataOciWafWebAppFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewallPolicy <a name="DataOciWafWebAppFirewallPolicy" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicy(Construct Scope, string Id, DataOciWafWebAppFirewallPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig">DataOciWafWebAppFirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig">DataOciWafWebAppFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafWebAppFirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafWebAppFirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafWebAppFirewallPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafWebAppFirewallPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWafWebAppFirewallPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWafWebAppFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList">DataOciWafWebAppFirewallPolicyActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestAccessControl">RequestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList">DataOciWafWebAppFirewallPolicyRequestAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestProtection">RequestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList">DataOciWafWebAppFirewallPolicyRequestProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestRateLimiting">RequestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList">DataOciWafWebAppFirewallPolicyRequestRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseAccessControl">ResponseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList">DataOciWafWebAppFirewallPolicyResponseAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseProtection">ResponseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList">DataOciWafWebAppFirewallPolicyResponseProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyIdInput">WebAppFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyId">WebAppFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.actions"></a>

```csharp
public DataOciWafWebAppFirewallPolicyActionsList Actions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList">DataOciWafWebAppFirewallPolicyActionsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `RequestAccessControl`<sup>Required</sup> <a name="RequestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestAccessControl"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestAccessControlList RequestAccessControl { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList">DataOciWafWebAppFirewallPolicyRequestAccessControlList</a>

---

##### `RequestProtection`<sup>Required</sup> <a name="RequestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestProtection"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionList RequestProtection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList">DataOciWafWebAppFirewallPolicyRequestProtectionList</a>

---

##### `RequestRateLimiting`<sup>Required</sup> <a name="RequestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestRateLimiting"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestRateLimitingList RequestRateLimiting { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList">DataOciWafWebAppFirewallPolicyRequestRateLimitingList</a>

---

##### `ResponseAccessControl`<sup>Required</sup> <a name="ResponseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseAccessControl"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseAccessControlList ResponseAccessControl { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList">DataOciWafWebAppFirewallPolicyResponseAccessControlList</a>

---

##### `ResponseProtection`<sup>Required</sup> <a name="ResponseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseProtection"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionList ResponseProtection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList">DataOciWafWebAppFirewallPolicyResponseProtectionList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WebAppFirewallPolicyIdInput`<sup>Optional</sup> <a name="WebAppFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyIdInput"></a>

```csharp
public string WebAppFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `WebAppFirewallPolicyId`<sup>Required</sup> <a name="WebAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyId"></a>

```csharp
public string WebAppFirewallPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallPolicyActions <a name="DataOciWafWebAppFirewallPolicyActions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActions {

};
```


### DataOciWafWebAppFirewallPolicyActionsBody <a name="DataOciWafWebAppFirewallPolicyActionsBody" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsBody {

};
```


### DataOciWafWebAppFirewallPolicyActionsHeaders <a name="DataOciWafWebAppFirewallPolicyActionsHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsHeaders {

};
```


### DataOciWafWebAppFirewallPolicyConfig <a name="DataOciWafWebAppFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WebAppFirewallPolicyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.webAppFirewallPolicyId">WebAppFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy#web_app_firewall_policy_id DataOciWafWebAppFirewallPolicy#web_app_firewall_policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WebAppFirewallPolicyId`<sup>Required</sup> <a name="WebAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.webAppFirewallPolicyId"></a>

```csharp
public string WebAppFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy#web_app_firewall_policy_id DataOciWafWebAppFirewallPolicy#web_app_firewall_policy_id}.

---

### DataOciWafWebAppFirewallPolicyRequestAccessControl <a name="DataOciWafWebAppFirewallPolicyRequestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestAccessControl {

};
```


### DataOciWafWebAppFirewallPolicyRequestAccessControlRules <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestAccessControlRules {

};
```


### DataOciWafWebAppFirewallPolicyRequestProtection <a name="DataOciWafWebAppFirewallPolicyRequestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtection {

};
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRules <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRules {

};
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities {

};
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights {

};
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions {

};
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings {

};
```


### DataOciWafWebAppFirewallPolicyRequestRateLimiting <a name="DataOciWafWebAppFirewallPolicyRequestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimiting {

};
```


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRules <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingRules {

};
```


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations {

};
```


### DataOciWafWebAppFirewallPolicyResponseAccessControl <a name="DataOciWafWebAppFirewallPolicyResponseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseAccessControl {

};
```


### DataOciWafWebAppFirewallPolicyResponseAccessControlRules <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseAccessControlRules {

};
```


### DataOciWafWebAppFirewallPolicyResponseProtection <a name="DataOciWafWebAppFirewallPolicyResponseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtection {

};
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRules <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRules {

};
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities {

};
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights {

};
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions {

};
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallPolicyActionsBodyList <a name="DataOciWafWebAppFirewallPolicyActionsBodyList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsBodyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyActionsBodyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyActionsBodyOutputReference <a name="DataOciWafWebAppFirewallPolicyActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody">DataOciWafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyActionsBody InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody">DataOciWafWebAppFirewallPolicyActionsBody</a>

---


### DataOciWafWebAppFirewallPolicyActionsHeadersList <a name="DataOciWafWebAppFirewallPolicyActionsHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference <a name="DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders">DataOciWafWebAppFirewallPolicyActionsHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyActionsHeaders InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders">DataOciWafWebAppFirewallPolicyActionsHeaders</a>

---


### DataOciWafWebAppFirewallPolicyActionsList <a name="DataOciWafWebAppFirewallPolicyActionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyActionsOutputReference <a name="DataOciWafWebAppFirewallPolicyActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.body">Body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList">DataOciWafWebAppFirewallPolicyActionsBodyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.headers">Headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList">DataOciWafWebAppFirewallPolicyActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions">DataOciWafWebAppFirewallPolicyActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.body"></a>

```csharp
public DataOciWafWebAppFirewallPolicyActionsBodyList Body { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList">DataOciWafWebAppFirewallPolicyActionsBodyList</a>

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.headers"></a>

```csharp
public DataOciWafWebAppFirewallPolicyActionsHeadersList Headers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList">DataOciWafWebAppFirewallPolicyActionsHeadersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions">DataOciWafWebAppFirewallPolicyActions</a>

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlList <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestAccessControlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName">DefaultActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList">DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl">DataOciWafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultActionName`<sup>Required</sup> <a name="DefaultActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName"></a>

```csharp
public string DefaultActionName { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList">DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestAccessControl InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl">DataOciWafWebAppFirewallPolicyRequestAccessControl</a>

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules">DataOciWafWebAppFirewallPolicyRequestAccessControlRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestAccessControlRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules">DataOciWafWebAppFirewallPolicyRequestAccessControlRules</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">BodyInspectionSizeLimitExceededActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">BodyInspectionSizeLimitInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection">DataOciWafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyInspectionSizeLimitExceededActionName`<sup>Required</sup> <a name="BodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```csharp
public string BodyInspectionSizeLimitExceededActionName { get; }
```

- *Type:* string

---

##### `BodyInspectionSizeLimitInBytes`<sup>Required</sup> <a name="BodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```csharp
public double BodyInspectionSizeLimitInBytes { get; }
```

- *Type:* double

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection">DataOciWafWebAppFirewallPolicyRequestProtection</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules">DataOciWafWebAppFirewallPolicyRequestProtectionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `IsBodyInspectionEnabled`<sup>Required</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```csharp
public IResolvable IsBodyInspectionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList ProtectionCapabilities { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `ProtectionCapabilitySettings`<sup>Required</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList ProtectionCapabilitySettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules">DataOciWafWebAppFirewallPolicyRequestProtectionRules</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```csharp
public string[] RequestCookies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">CollaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `CollaborativeActionThreshold`<sup>Required</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```csharp
public double CollaborativeActionThreshold { get; }
```

- *Type:* double

---

##### `CollaborativeWeights`<sup>Required</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList CollaborativeWeights { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList Exclusions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; }
```

- *Type:* string[]

---

##### `MaxHttpRequestHeaderLength`<sup>Required</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```csharp
public double MaxHttpRequestHeaderLength { get; }
```

- *Type:* double

---

##### `MaxHttpRequestHeaders`<sup>Required</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```csharp
public double MaxHttpRequestHeaders { get; }
```

- *Type:* double

---

##### `MaxNumberOfArguments`<sup>Required</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```csharp
public double MaxNumberOfArguments { get; }
```

- *Type:* double

---

##### `MaxSingleArgumentLength`<sup>Required</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```csharp
public double MaxSingleArgumentLength { get; }
```

- *Type:* double

---

##### `MaxTotalArgumentLength`<sup>Required</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```csharp
public double MaxTotalArgumentLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingList <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting">DataOciWafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestRateLimiting InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting">DataOciWafWebAppFirewallPolicyRequestRateLimiting</a>

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">ActionDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">PeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">RequestsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionDurationInSeconds`<sup>Required</sup> <a name="ActionDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```csharp
public double ActionDurationInSeconds { get; }
```

- *Type:* double

---

##### `PeriodInSeconds`<sup>Required</sup> <a name="PeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```csharp
public double PeriodInSeconds { get; }
```

- *Type:* double

---

##### `RequestsLimit`<sup>Required</sup> <a name="RequestsLimit" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```csharp
public double RequestsLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules">DataOciWafWebAppFirewallPolicyRequestRateLimitingRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyRequestRateLimitingRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules">DataOciWafWebAppFirewallPolicyRequestRateLimitingRules</a>

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlList <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseAccessControlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList">DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl">DataOciWafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList">DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseAccessControl InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl">DataOciWafWebAppFirewallPolicyResponseAccessControl</a>

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules">DataOciWafWebAppFirewallPolicyResponseAccessControlRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseAccessControlRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules">DataOciWafWebAppFirewallPolicyResponseAccessControlRules</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection">DataOciWafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection">DataOciWafWebAppFirewallPolicyResponseProtection</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules">DataOciWafWebAppFirewallPolicyResponseProtectionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `IsBodyInspectionEnabled`<sup>Required</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```csharp
public IResolvable IsBodyInspectionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList ProtectionCapabilities { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `ProtectionCapabilitySettings`<sup>Required</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList ProtectionCapabilitySettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules">DataOciWafWebAppFirewallPolicyResponseProtectionRules</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```csharp
public string[] RequestCookies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">CollaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `CollaborativeActionThreshold`<sup>Required</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```csharp
public double CollaborativeActionThreshold { get; }
```

- *Type:* double

---

##### `CollaborativeWeights`<sup>Required</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList CollaborativeWeights { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList Exclusions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.get"></a>

```csharp
private DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; }
```

- *Type:* string[]

---

##### `MaxHttpRequestHeaderLength`<sup>Required</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```csharp
public double MaxHttpRequestHeaderLength { get; }
```

- *Type:* double

---

##### `MaxHttpRequestHeaders`<sup>Required</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```csharp
public double MaxHttpRequestHeaders { get; }
```

- *Type:* double

---

##### `MaxNumberOfArguments`<sup>Required</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```csharp
public double MaxNumberOfArguments { get; }
```

- *Type:* double

---

##### `MaxSingleArgumentLength`<sup>Required</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```csharp
public double MaxSingleArgumentLength { get; }
```

- *Type:* double

---

##### `MaxTotalArgumentLength`<sup>Required</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```csharp
public double MaxTotalArgumentLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---



