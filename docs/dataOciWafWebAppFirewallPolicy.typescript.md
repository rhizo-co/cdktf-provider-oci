# `dataOciWafWebAppFirewallPolicy` Submodule <a name="`dataOciWafWebAppFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewallPolicy <a name="DataOciWafWebAppFirewallPolicy" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy(scope: Construct, id: string, config: DataOciWafWebAppFirewallPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig">DataOciWafWebAppFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig">DataOciWafWebAppFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isConstruct"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformElement"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformDataSource"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWafWebAppFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWafWebAppFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList">DataOciWafWebAppFirewallPolicyActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestAccessControl">requestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList">DataOciWafWebAppFirewallPolicyRequestAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestProtection">requestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList">DataOciWafWebAppFirewallPolicyRequestProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestRateLimiting">requestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList">DataOciWafWebAppFirewallPolicyRequestRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseAccessControl">responseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList">DataOciWafWebAppFirewallPolicyResponseAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseProtection">responseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList">DataOciWafWebAppFirewallPolicyResponseProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyIdInput">webAppFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyId">webAppFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.actions"></a>

```typescript
public readonly actions: DataOciWafWebAppFirewallPolicyActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList">DataOciWafWebAppFirewallPolicyActionsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `requestAccessControl`<sup>Required</sup> <a name="requestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestAccessControl"></a>

```typescript
public readonly requestAccessControl: DataOciWafWebAppFirewallPolicyRequestAccessControlList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList">DataOciWafWebAppFirewallPolicyRequestAccessControlList</a>

---

##### `requestProtection`<sup>Required</sup> <a name="requestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestProtection"></a>

```typescript
public readonly requestProtection: DataOciWafWebAppFirewallPolicyRequestProtectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList">DataOciWafWebAppFirewallPolicyRequestProtectionList</a>

---

##### `requestRateLimiting`<sup>Required</sup> <a name="requestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.requestRateLimiting"></a>

```typescript
public readonly requestRateLimiting: DataOciWafWebAppFirewallPolicyRequestRateLimitingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList">DataOciWafWebAppFirewallPolicyRequestRateLimitingList</a>

---

##### `responseAccessControl`<sup>Required</sup> <a name="responseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseAccessControl"></a>

```typescript
public readonly responseAccessControl: DataOciWafWebAppFirewallPolicyResponseAccessControlList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList">DataOciWafWebAppFirewallPolicyResponseAccessControlList</a>

---

##### `responseProtection`<sup>Required</sup> <a name="responseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.responseProtection"></a>

```typescript
public readonly responseProtection: DataOciWafWebAppFirewallPolicyResponseProtectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList">DataOciWafWebAppFirewallPolicyResponseProtectionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `webAppFirewallPolicyIdInput`<sup>Optional</sup> <a name="webAppFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyIdInput"></a>

```typescript
public readonly webAppFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `webAppFirewallPolicyId`<sup>Required</sup> <a name="webAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.webAppFirewallPolicyId"></a>

```typescript
public readonly webAppFirewallPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallPolicyActions <a name="DataOciWafWebAppFirewallPolicyActions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyActions: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions = { ... }
```


### DataOciWafWebAppFirewallPolicyActionsBody <a name="DataOciWafWebAppFirewallPolicyActionsBody" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyActionsBody: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody = { ... }
```


### DataOciWafWebAppFirewallPolicyActionsHeaders <a name="DataOciWafWebAppFirewallPolicyActionsHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyActionsHeaders: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders = { ... }
```


### DataOciWafWebAppFirewallPolicyConfig <a name="DataOciWafWebAppFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyConfig: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.webAppFirewallPolicyId">webAppFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy#web_app_firewall_policy_id DataOciWafWebAppFirewallPolicy#web_app_firewall_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `webAppFirewallPolicyId`<sup>Required</sup> <a name="webAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyConfig.property.webAppFirewallPolicyId"></a>

```typescript
public readonly webAppFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policy#web_app_firewall_policy_id DataOciWafWebAppFirewallPolicy#web_app_firewall_policy_id}.

---

### DataOciWafWebAppFirewallPolicyRequestAccessControl <a name="DataOciWafWebAppFirewallPolicyRequestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestAccessControl: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestAccessControlRules <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestAccessControlRules: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestProtection <a name="DataOciWafWebAppFirewallPolicyRequestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestProtection: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRules <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestProtectionRules: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestRateLimiting <a name="DataOciWafWebAppFirewallPolicyRequestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestRateLimiting: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRules <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestRateLimitingRules: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules = { ... }
```


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseAccessControl <a name="DataOciWafWebAppFirewallPolicyResponseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseAccessControl: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseAccessControlRules <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseAccessControlRules: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseProtection <a name="DataOciWafWebAppFirewallPolicyResponseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseProtection: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRules <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseProtectionRules: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions = { ... }
```


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings: dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallPolicyActionsBodyList <a name="DataOciWafWebAppFirewallPolicyActionsBodyList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyActionsBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyActionsBodyOutputReference <a name="DataOciWafWebAppFirewallPolicyActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody">DataOciWafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyActionsBody;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBody">DataOciWafWebAppFirewallPolicyActionsBody</a>

---


### DataOciWafWebAppFirewallPolicyActionsHeadersList <a name="DataOciWafWebAppFirewallPolicyActionsHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference <a name="DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders">DataOciWafWebAppFirewallPolicyActionsHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyActionsHeaders;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeaders">DataOciWafWebAppFirewallPolicyActionsHeaders</a>

---


### DataOciWafWebAppFirewallPolicyActionsList <a name="DataOciWafWebAppFirewallPolicyActionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyActionsOutputReference <a name="DataOciWafWebAppFirewallPolicyActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.body">body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList">DataOciWafWebAppFirewallPolicyActionsBodyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList">DataOciWafWebAppFirewallPolicyActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions">DataOciWafWebAppFirewallPolicyActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.body"></a>

```typescript
public readonly body: DataOciWafWebAppFirewallPolicyActionsBodyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsBodyList">DataOciWafWebAppFirewallPolicyActionsBodyList</a>

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.headers"></a>

```typescript
public readonly headers: DataOciWafWebAppFirewallPolicyActionsHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsHeadersList">DataOciWafWebAppFirewallPolicyActionsHeadersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyActions">DataOciWafWebAppFirewallPolicyActions</a>

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlList <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName">defaultActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList">DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl">DataOciWafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultActionName`<sup>Required</sup> <a name="defaultActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName"></a>

```typescript
public readonly defaultActionName: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList">DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestAccessControl;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControl">DataOciWafWebAppFirewallPolicyRequestAccessControl</a>

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules">DataOciWafWebAppFirewallPolicyRequestAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestAccessControlRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestAccessControlRules">DataOciWafWebAppFirewallPolicyRequestAccessControlRules</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">bodyInspectionSizeLimitExceededActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">bodyInspectionSizeLimitInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection">DataOciWafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyInspectionSizeLimitExceededActionName`<sup>Required</sup> <a name="bodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```typescript
public readonly bodyInspectionSizeLimitExceededActionName: string;
```

- *Type:* string

---

##### `bodyInspectionSizeLimitInBytes`<sup>Required</sup> <a name="bodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```typescript
public readonly bodyInspectionSizeLimitInBytes: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPolicyRequestProtectionRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestProtection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtection">DataOciWafWebAppFirewallPolicyRequestProtection</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">isBodyInspectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities">protectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">protectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules">DataOciWafWebAppFirewallPolicyRequestProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `isBodyInspectionEnabled`<sup>Required</sup> <a name="isBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```typescript
public readonly isBodyInspectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionCapabilities`<sup>Required</sup> <a name="protectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```typescript
public readonly protectionCapabilities: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `protectionCapabilitySettings`<sup>Required</sup> <a name="protectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```typescript
public readonly protectionCapabilitySettings: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestProtectionRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRules">DataOciWafWebAppFirewallPolicyRequestProtectionRules</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">requestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `requestCookies`<sup>Required</sup> <a name="requestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```typescript
public readonly requestCookies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```typescript
public readonly collaborativeActionThreshold: number;
```

- *Type:* number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```typescript
public readonly collaborativeWeights: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">maxHttpRequestHeaderLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">maxHttpRequestHeaders</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">maxNumberOfArguments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">maxSingleArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">maxTotalArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string[];
```

- *Type:* string[]

---

##### `maxHttpRequestHeaderLength`<sup>Required</sup> <a name="maxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```typescript
public readonly maxHttpRequestHeaderLength: number;
```

- *Type:* number

---

##### `maxHttpRequestHeaders`<sup>Required</sup> <a name="maxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```typescript
public readonly maxHttpRequestHeaders: number;
```

- *Type:* number

---

##### `maxNumberOfArguments`<sup>Required</sup> <a name="maxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```typescript
public readonly maxNumberOfArguments: number;
```

- *Type:* number

---

##### `maxSingleArgumentLength`<sup>Required</sup> <a name="maxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```typescript
public readonly maxSingleArgumentLength: number;
```

- *Type:* number

---

##### `maxTotalArgumentLength`<sup>Required</sup> <a name="maxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```typescript
public readonly maxTotalArgumentLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingList <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting">DataOciWafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestRateLimiting;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimiting">DataOciWafWebAppFirewallPolicyRequestRateLimiting</a>

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">actionDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">periodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">requestsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionDurationInSeconds`<sup>Required</sup> <a name="actionDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```typescript
public readonly actionDurationInSeconds: number;
```

- *Type:* number

---

##### `periodInSeconds`<sup>Required</sup> <a name="periodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```typescript
public readonly periodInSeconds: number;
```

- *Type:* number

---

##### `requestsLimit`<sup>Required</sup> <a name="requestsLimit" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```typescript
public readonly requestsLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations</a>

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules">DataOciWafWebAppFirewallPolicyRequestRateLimitingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyRequestRateLimitingRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyRequestRateLimitingRules">DataOciWafWebAppFirewallPolicyRequestRateLimitingRules</a>

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlList <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList">DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl">DataOciWafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList">DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseAccessControl;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControl">DataOciWafWebAppFirewallPolicyResponseAccessControl</a>

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules">DataOciWafWebAppFirewallPolicyResponseAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseAccessControlRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseAccessControlRules">DataOciWafWebAppFirewallPolicyResponseAccessControlRules</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection">DataOciWafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPolicyResponseProtectionRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseProtection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtection">DataOciWafWebAppFirewallPolicyResponseProtection</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">isBodyInspectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities">protectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">protectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules">DataOciWafWebAppFirewallPolicyResponseProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `isBodyInspectionEnabled`<sup>Required</sup> <a name="isBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```typescript
public readonly isBodyInspectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionCapabilities`<sup>Required</sup> <a name="protectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```typescript
public readonly protectionCapabilities: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `protectionCapabilitySettings`<sup>Required</sup> <a name="protectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```typescript
public readonly protectionCapabilitySettings: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseProtectionRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRules">DataOciWafWebAppFirewallPolicyResponseProtectionRules</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">requestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `requestCookies`<sup>Required</sup> <a name="requestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```typescript
public readonly requestCookies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```typescript
public readonly collaborativeActionThreshold: number;
```

- *Type:* number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```typescript
public readonly collaborativeWeights: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">maxHttpRequestHeaderLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">maxHttpRequestHeaders</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">maxNumberOfArguments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">maxSingleArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">maxTotalArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string[];
```

- *Type:* string[]

---

##### `maxHttpRequestHeaderLength`<sup>Required</sup> <a name="maxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```typescript
public readonly maxHttpRequestHeaderLength: number;
```

- *Type:* number

---

##### `maxHttpRequestHeaders`<sup>Required</sup> <a name="maxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```typescript
public readonly maxHttpRequestHeaders: number;
```

- *Type:* number

---

##### `maxNumberOfArguments`<sup>Required</sup> <a name="maxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```typescript
public readonly maxNumberOfArguments: number;
```

- *Type:* number

---

##### `maxSingleArgumentLength`<sup>Required</sup> <a name="maxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```typescript
public readonly maxSingleArgumentLength: number;
```

- *Type:* number

---

##### `maxTotalArgumentLength`<sup>Required</sup> <a name="maxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```typescript
public readonly maxTotalArgumentLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicy.DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---



