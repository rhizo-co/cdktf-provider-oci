# `dataOciWaasWaasPolicy` Submodule <a name="`dataOciWaasWaasPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasWaasPolicy <a name="DataOciWaasWaasPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy oci_waas_waas_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicy(scope: Construct, id: string, config: DataOciWaasWaasPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig">DataOciWaasWaasPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig">DataOciWaasWaasPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaasWaasPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaasWaasPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasWaasPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains">additionalDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups">originGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins">origins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig">policyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig">wafConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput">waasPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId">waasPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalDomains`<sup>Required</sup> <a name="additionalDomains" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains"></a>

```typescript
public readonly additionalDomains: string[];
```

- *Type:* string[]

---

##### `cname`<sup>Required</sup> <a name="cname" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `originGroups`<sup>Required</sup> <a name="originGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups"></a>

```typescript
public readonly originGroups: DataOciWaasWaasPolicyOriginGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a>

---

##### `origins`<sup>Required</sup> <a name="origins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins"></a>

```typescript
public readonly origins: DataOciWaasWaasPolicyOriginsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a>

---

##### `policyConfig`<sup>Required</sup> <a name="policyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig"></a>

```typescript
public readonly policyConfig: DataOciWaasWaasPolicyPolicyConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `wafConfig`<sup>Required</sup> <a name="wafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig"></a>

```typescript
public readonly wafConfig: DataOciWaasWaasPolicyWafConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `waasPolicyIdInput`<sup>Optional</sup> <a name="waasPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput"></a>

```typescript
public readonly waasPolicyIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `waasPolicyId`<sup>Required</sup> <a name="waasPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId"></a>

```typescript
public readonly waasPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasWaasPolicyConfig <a name="DataOciWaasWaasPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyConfig: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId">waasPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `waasPolicyId`<sup>Required</sup> <a name="waasPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId"></a>

```typescript
public readonly waasPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciWaasWaasPolicyOriginGroups <a name="DataOciWaasWaasPolicyOriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyOriginGroups: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups = { ... }
```


### DataOciWaasWaasPolicyOriginGroupsOriginGroup <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyOriginGroupsOriginGroup: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup = { ... }
```


### DataOciWaasWaasPolicyOrigins <a name="DataOciWaasWaasPolicyOrigins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyOrigins: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins = { ... }
```


### DataOciWaasWaasPolicyOriginsCustomHeaders <a name="DataOciWaasWaasPolicyOriginsCustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyOriginsCustomHeaders: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders = { ... }
```


### DataOciWaasWaasPolicyPolicyConfig <a name="DataOciWaasWaasPolicyPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyPolicyConfig: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig = { ... }
```


### DataOciWaasWaasPolicyPolicyConfigHealthChecks <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyPolicyConfigHealthChecks: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks = { ... }
```


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod = { ... }
```


### DataOciWaasWaasPolicyWafConfig <a name="DataOciWaasWaasPolicyWafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfig: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig = { ... }
```


### DataOciWaasWaasPolicyWafConfigAccessRules <a name="DataOciWaasWaasPolicyWafConfigAccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigAccessRules: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules = { ... }
```


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigAccessRulesCriteria: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria = { ... }
```


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation = { ... }
```


### DataOciWaasWaasPolicyWafConfigAddressRateLimiting <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigAddressRateLimiting: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting = { ... }
```


### DataOciWaasWaasPolicyWafConfigCachingRules <a name="DataOciWaasWaasPolicyWafConfigCachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigCachingRules: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules = { ... }
```


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigCachingRulesCriteria: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria = { ... }
```


### DataOciWaasWaasPolicyWafConfigCaptchas <a name="DataOciWaasWaasPolicyWafConfigCaptchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigCaptchas: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas = { ... }
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRules <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigCustomProtectionRules: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules = { ... }
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions = { ... }
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge = { ... }
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings = { ... }
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigHumanInteractionChallenge: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge = { ... }
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings = { ... }
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader = { ... }
```


### DataOciWaasWaasPolicyWafConfigJsChallenge <a name="DataOciWaasWaasPolicyWafConfigJsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigJsChallenge: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge = { ... }
```


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings = { ... }
```


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteria <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigJsChallengeCriteria: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria = { ... }
```


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader = { ... }
```


### DataOciWaasWaasPolicyWafConfigProtectionSettings <a name="DataOciWaasWaasPolicyWafConfigProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigProtectionSettings: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings = { ... }
```


### DataOciWaasWaasPolicyWafConfigWhitelists <a name="DataOciWaasWaasPolicyWafConfigWhitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasWaasPolicyWafConfigWhitelists: dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasWaasPolicyOriginGroupsList <a name="DataOciWaasWaasPolicyOriginGroupsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyOriginGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupList <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyOriginGroupsOriginGroup;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a>

---


### DataOciWaasWaasPolicyOriginGroupsOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup">originGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `originGroup`<sup>Required</sup> <a name="originGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup"></a>

```typescript
public readonly originGroup: DataOciWaasWaasPolicyOriginGroupsOriginGroupList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyOriginGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a>

---


### DataOciWaasWaasPolicyOriginsCustomHeadersList <a name="DataOciWaasWaasPolicyOriginsCustomHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference <a name="DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyOriginsCustomHeaders;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a>

---


### DataOciWaasWaasPolicyOriginsList <a name="DataOciWaasWaasPolicyOriginsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyOriginsOutputReference <a name="DataOciWaasWaasPolicyOriginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders">customHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders"></a>

```typescript
public readonly customHeaders: DataOciWaasWaasPolicyOriginsCustomHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a>

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyOrigins;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a>

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksList <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup">expectedResponseCodeGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText">expectedResponseText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers">headers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled">isResponseTextCheckEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expectedResponseCodeGroup`<sup>Required</sup> <a name="expectedResponseCodeGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup"></a>

```typescript
public readonly expectedResponseCodeGroup: string[];
```

- *Type:* string[]

---

##### `expectedResponseText`<sup>Required</sup> <a name="expectedResponseText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText"></a>

```typescript
public readonly expectedResponseText: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers"></a>

```typescript
public readonly headers: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isResponseTextCheckEnabled`<sup>Required</sup> <a name="isResponseTextCheckEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled"></a>

```typescript
public readonly isResponseTextCheckEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyPolicyConfigHealthChecks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a>

---


### DataOciWaasWaasPolicyPolicyConfigList <a name="DataOciWaasWaasPolicyPolicyConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyPolicyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds">expirationTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `expirationTimeInSeconds`<sup>Required</sup> <a name="expirationTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds"></a>

```typescript
public readonly expirationTimeInSeconds: number;
```

- *Type:* number

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

---


### DataOciWaasWaasPolicyPolicyConfigOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup">cipherGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader">clientAddressHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks">healthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn">isBehindCdn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected">isCacheControlRespected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled">isHttpsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced">isHttpsForced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled">isOriginCompressionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled">isResponseBufferingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled">isSniEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod">loadBalancingMethod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols">tlsProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes">websocketPathPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `cipherGroup`<sup>Required</sup> <a name="cipherGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup"></a>

```typescript
public readonly cipherGroup: string;
```

- *Type:* string

---

##### `clientAddressHeader`<sup>Required</sup> <a name="clientAddressHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader"></a>

```typescript
public readonly clientAddressHeader: string;
```

- *Type:* string

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks"></a>

```typescript
public readonly healthChecks: DataOciWaasWaasPolicyPolicyConfigHealthChecksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a>

---

##### `isBehindCdn`<sup>Required</sup> <a name="isBehindCdn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn"></a>

```typescript
public readonly isBehindCdn: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCacheControlRespected`<sup>Required</sup> <a name="isCacheControlRespected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected"></a>

```typescript
public readonly isCacheControlRespected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHttpsEnabled`<sup>Required</sup> <a name="isHttpsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled"></a>

```typescript
public readonly isHttpsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHttpsForced`<sup>Required</sup> <a name="isHttpsForced" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced"></a>

```typescript
public readonly isHttpsForced: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOriginCompressionEnabled`<sup>Required</sup> <a name="isOriginCompressionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled"></a>

```typescript
public readonly isOriginCompressionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isResponseBufferingEnabled`<sup>Required</sup> <a name="isResponseBufferingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled"></a>

```typescript
public readonly isResponseBufferingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSniEnabled`<sup>Required</sup> <a name="isSniEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled"></a>

```typescript
public readonly isSniEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `loadBalancingMethod`<sup>Required</sup> <a name="loadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod"></a>

```typescript
public readonly loadBalancingMethod: DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a>

---

##### `tlsProtocols`<sup>Required</sup> <a name="tlsProtocols" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols"></a>

```typescript
public readonly tlsProtocols: string[];
```

- *Type:* string[]

---

##### `websocketPathPrefixes`<sup>Required</sup> <a name="websocketPathPrefixes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes"></a>

```typescript
public readonly websocketPathPrefixes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyPolicyConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive">isCaseSensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `isCaseSensitive`<sup>Required</sup> <a name="isCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive"></a>

```typescript
public readonly isCaseSensitive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigAccessRulesCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction">blockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode">blockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription">blockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage">blockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode">blockResponseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges">bypassChallenges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter">captchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader">captchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel">captchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle">captchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode">redirectResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation">responseHeaderManipulation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `blockAction`<sup>Required</sup> <a name="blockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction"></a>

```typescript
public readonly blockAction: string;
```

- *Type:* string

---

##### `blockErrorPageCode`<sup>Required</sup> <a name="blockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode"></a>

```typescript
public readonly blockErrorPageCode: string;
```

- *Type:* string

---

##### `blockErrorPageDescription`<sup>Required</sup> <a name="blockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription"></a>

```typescript
public readonly blockErrorPageDescription: string;
```

- *Type:* string

---

##### `blockErrorPageMessage`<sup>Required</sup> <a name="blockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage"></a>

```typescript
public readonly blockErrorPageMessage: string;
```

- *Type:* string

---

##### `blockResponseCode`<sup>Required</sup> <a name="blockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode"></a>

```typescript
public readonly blockResponseCode: number;
```

- *Type:* number

---

##### `bypassChallenges`<sup>Required</sup> <a name="bypassChallenges" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges"></a>

```typescript
public readonly bypassChallenges: string[];
```

- *Type:* string[]

---

##### `captchaFooter`<sup>Required</sup> <a name="captchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter"></a>

```typescript
public readonly captchaFooter: string;
```

- *Type:* string

---

##### `captchaHeader`<sup>Required</sup> <a name="captchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader"></a>

```typescript
public readonly captchaHeader: string;
```

- *Type:* string

---

##### `captchaSubmitLabel`<sup>Required</sup> <a name="captchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel"></a>

```typescript
public readonly captchaSubmitLabel: string;
```

- *Type:* string

---

##### `captchaTitle`<sup>Required</sup> <a name="captchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle"></a>

```typescript
public readonly captchaTitle: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria"></a>

```typescript
public readonly criteria: DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectResponseCode`<sup>Required</sup> <a name="redirectResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode"></a>

```typescript
public readonly redirectResponseCode: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `responseHeaderManipulation`<sup>Required</sup> <a name="responseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation"></a>

```typescript
public readonly responseHeaderManipulation: DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigAccessRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a>

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingList <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress">allowedRatePerAddress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode">blockResponseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress">maxDelayedCountPerAddress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRatePerAddress`<sup>Required</sup> <a name="allowedRatePerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress"></a>

```typescript
public readonly allowedRatePerAddress: number;
```

- *Type:* number

---

##### `blockResponseCode`<sup>Required</sup> <a name="blockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode"></a>

```typescript
public readonly blockResponseCode: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxDelayedCountPerAddress`<sup>Required</sup> <a name="maxDelayedCountPerAddress" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress"></a>

```typescript
public readonly maxDelayedCountPerAddress: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigAddressRateLimiting;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigCachingRulesCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration">cachingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration">clientCachingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled">isClientCachingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `cachingDuration`<sup>Required</sup> <a name="cachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration"></a>

```typescript
public readonly cachingDuration: string;
```

- *Type:* string

---

##### `clientCachingDuration`<sup>Required</sup> <a name="clientCachingDuration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration"></a>

```typescript
public readonly clientCachingDuration: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria"></a>

```typescript
public readonly criteria: DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a>

---

##### `isClientCachingEnabled`<sup>Required</sup> <a name="isClientCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled"></a>

```typescript
public readonly isClientCachingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigCachingRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a>

---


### DataOciWaasWaasPolicyWafConfigCaptchasList <a name="DataOciWaasWaasPolicyWafConfigCaptchasList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigCaptchasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCaptchasOutputReference <a name="DataOciWaasWaasPolicyWafConfigCaptchasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage">failureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText">footerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText">headerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds">sessionExpirationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel">submitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureMessage`<sup>Required</sup> <a name="failureMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage"></a>

```typescript
public readonly failureMessage: string;
```

- *Type:* string

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText"></a>

```typescript
public readonly footerText: string;
```

- *Type:* string

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText"></a>

```typescript
public readonly headerText: string;
```

- *Type:* string

---

##### `sessionExpirationInSeconds`<sup>Required</sup> <a name="sessionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds"></a>

```typescript
public readonly sessionExpirationInSeconds: number;
```

- *Type:* number

---

##### `submitLabel`<sup>Required</sup> <a name="submitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel"></a>

```typescript
public readonly submitLabel: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigCaptchas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigCustomProtectionRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction">blockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">blockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">blockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">blockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode">blockResponseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter">captchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader">captchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle">captchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockAction`<sup>Required</sup> <a name="blockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```typescript
public readonly blockAction: string;
```

- *Type:* string

---

##### `blockErrorPageCode`<sup>Required</sup> <a name="blockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```typescript
public readonly blockErrorPageCode: string;
```

- *Type:* string

---

##### `blockErrorPageDescription`<sup>Required</sup> <a name="blockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```typescript
public readonly blockErrorPageDescription: string;
```

- *Type:* string

---

##### `blockErrorPageMessage`<sup>Required</sup> <a name="blockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```typescript
public readonly blockErrorPageMessage: string;
```

- *Type:* string

---

##### `blockResponseCode`<sup>Required</sup> <a name="blockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```typescript
public readonly blockResponseCode: number;
```

- *Type:* number

---

##### `captchaFooter`<sup>Required</sup> <a name="captchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```typescript
public readonly captchaFooter: string;
```

- *Type:* string

---

##### `captchaHeader`<sup>Required</sup> <a name="captchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```typescript
public readonly captchaHeader: string;
```

- *Type:* string

---

##### `captchaSubmitLabel`<sup>Required</sup> <a name="captchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```typescript
public readonly captchaSubmitLabel: string;
```

- *Type:* string

---

##### `captchaTitle`<sup>Required</sup> <a name="captchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```typescript
public readonly captchaTitle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds">actionExpirationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings">challengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds">failureThresholdExpirationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount">maxAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds">maxAddressCountExpirationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `actionExpirationInSeconds`<sup>Required</sup> <a name="actionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds"></a>

```typescript
public readonly actionExpirationInSeconds: number;
```

- *Type:* number

---

##### `challengeSettings`<sup>Required</sup> <a name="challengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings"></a>

```typescript
public readonly challengeSettings: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a>

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `failureThresholdExpirationInSeconds`<sup>Required</sup> <a name="failureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```typescript
public readonly failureThresholdExpirationInSeconds: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxAddressCount`<sup>Required</sup> <a name="maxAddressCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount"></a>

```typescript
public readonly maxAddressCount: number;
```

- *Type:* number

---

##### `maxAddressCountExpirationInSeconds`<sup>Required</sup> <a name="maxAddressCountExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds"></a>

```typescript
public readonly maxAddressCountExpirationInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction">blockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">blockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">blockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">blockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode">blockResponseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter">captchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader">captchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle">captchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockAction`<sup>Required</sup> <a name="blockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```typescript
public readonly blockAction: string;
```

- *Type:* string

---

##### `blockErrorPageCode`<sup>Required</sup> <a name="blockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```typescript
public readonly blockErrorPageCode: string;
```

- *Type:* string

---

##### `blockErrorPageDescription`<sup>Required</sup> <a name="blockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```typescript
public readonly blockErrorPageDescription: string;
```

- *Type:* string

---

##### `blockErrorPageMessage`<sup>Required</sup> <a name="blockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```typescript
public readonly blockErrorPageMessage: string;
```

- *Type:* string

---

##### `blockResponseCode`<sup>Required</sup> <a name="blockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```typescript
public readonly blockResponseCode: number;
```

- *Type:* number

---

##### `captchaFooter`<sup>Required</sup> <a name="captchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```typescript
public readonly captchaFooter: string;
```

- *Type:* string

---

##### `captchaHeader`<sup>Required</sup> <a name="captchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```typescript
public readonly captchaHeader: string;
```

- *Type:* string

---

##### `captchaSubmitLabel`<sup>Required</sup> <a name="captchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```typescript
public readonly captchaSubmitLabel: string;
```

- *Type:* string

---

##### `captchaTitle`<sup>Required</sup> <a name="captchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```typescript
public readonly captchaTitle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds">actionExpirationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings">challengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds">failureThresholdExpirationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold">interactionThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled">isNatEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds">recordingPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader">setHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `actionExpirationInSeconds`<sup>Required</sup> <a name="actionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds"></a>

```typescript
public readonly actionExpirationInSeconds: number;
```

- *Type:* number

---

##### `challengeSettings`<sup>Required</sup> <a name="challengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings"></a>

```typescript
public readonly challengeSettings: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a>

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `failureThresholdExpirationInSeconds`<sup>Required</sup> <a name="failureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```typescript
public readonly failureThresholdExpirationInSeconds: number;
```

- *Type:* number

---

##### `interactionThreshold`<sup>Required</sup> <a name="interactionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold"></a>

```typescript
public readonly interactionThreshold: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isNatEnabled`<sup>Required</sup> <a name="isNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled"></a>

```typescript
public readonly isNatEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `recordingPeriodInSeconds`<sup>Required</sup> <a name="recordingPeriodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds"></a>

```typescript
public readonly recordingPeriodInSeconds: number;
```

- *Type:* number

---

##### `setHttpHeader`<sup>Required</sup> <a name="setHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader"></a>

```typescript
public readonly setHttpHeader: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction">blockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">blockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">blockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">blockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode">blockResponseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter">captchaFooter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader">captchaHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captchaSubmitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle">captchaTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockAction`<sup>Required</sup> <a name="blockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```typescript
public readonly blockAction: string;
```

- *Type:* string

---

##### `blockErrorPageCode`<sup>Required</sup> <a name="blockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```typescript
public readonly blockErrorPageCode: string;
```

- *Type:* string

---

##### `blockErrorPageDescription`<sup>Required</sup> <a name="blockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```typescript
public readonly blockErrorPageDescription: string;
```

- *Type:* string

---

##### `blockErrorPageMessage`<sup>Required</sup> <a name="blockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```typescript
public readonly blockErrorPageMessage: string;
```

- *Type:* string

---

##### `blockResponseCode`<sup>Required</sup> <a name="blockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```typescript
public readonly blockResponseCode: number;
```

- *Type:* number

---

##### `captchaFooter`<sup>Required</sup> <a name="captchaFooter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```typescript
public readonly captchaFooter: string;
```

- *Type:* string

---

##### `captchaHeader`<sup>Required</sup> <a name="captchaHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```typescript
public readonly captchaHeader: string;
```

- *Type:* string

---

##### `captchaSubmitLabel`<sup>Required</sup> <a name="captchaSubmitLabel" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```typescript
public readonly captchaSubmitLabel: string;
```

- *Type:* string

---

##### `captchaTitle`<sup>Required</sup> <a name="captchaTitle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```typescript
public readonly captchaTitle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive">isCaseSensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `isCaseSensitive`<sup>Required</sup> <a name="isCaseSensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive"></a>

```typescript
public readonly isCaseSensitive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigJsChallengeCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds">actionExpirationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged">areRedirectsChallenged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings">challengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled">isNatEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader">setHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `actionExpirationInSeconds`<sup>Required</sup> <a name="actionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds"></a>

```typescript
public readonly actionExpirationInSeconds: number;
```

- *Type:* number

---

##### `areRedirectsChallenged`<sup>Required</sup> <a name="areRedirectsChallenged" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged"></a>

```typescript
public readonly areRedirectsChallenged: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `challengeSettings`<sup>Required</sup> <a name="challengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings"></a>

```typescript
public readonly challengeSettings: DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria"></a>

```typescript
public readonly criteria: DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a>

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isNatEnabled`<sup>Required</sup> <a name="isNatEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled"></a>

```typescript
public readonly isNatEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `setHttpHeader`<sup>Required</sup> <a name="setHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader"></a>

```typescript
public readonly setHttpHeader: DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigJsChallenge;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigList <a name="DataOciWaasWaasPolicyWafConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigOutputReference <a name="DataOciWaasWaasPolicyWafConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules">accessRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting">addressRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules">cachingRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas">captchas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules">customProtectionRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge">deviceFingerprintChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge">humanInteractionChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge">jsChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups">originGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings">protectionSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists">whitelists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRules`<sup>Required</sup> <a name="accessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules"></a>

```typescript
public readonly accessRules: DataOciWaasWaasPolicyWafConfigAccessRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a>

---

##### `addressRateLimiting`<sup>Required</sup> <a name="addressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting"></a>

```typescript
public readonly addressRateLimiting: DataOciWaasWaasPolicyWafConfigAddressRateLimitingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a>

---

##### `cachingRules`<sup>Required</sup> <a name="cachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules"></a>

```typescript
public readonly cachingRules: DataOciWaasWaasPolicyWafConfigCachingRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a>

---

##### `captchas`<sup>Required</sup> <a name="captchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas"></a>

```typescript
public readonly captchas: DataOciWaasWaasPolicyWafConfigCaptchasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a>

---

##### `customProtectionRules`<sup>Required</sup> <a name="customProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules"></a>

```typescript
public readonly customProtectionRules: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a>

---

##### `deviceFingerprintChallenge`<sup>Required</sup> <a name="deviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge"></a>

```typescript
public readonly deviceFingerprintChallenge: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a>

---

##### `humanInteractionChallenge`<sup>Required</sup> <a name="humanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge"></a>

```typescript
public readonly humanInteractionChallenge: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a>

---

##### `jsChallenge`<sup>Required</sup> <a name="jsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge"></a>

```typescript
public readonly jsChallenge: DataOciWaasWaasPolicyWafConfigJsChallengeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `originGroups`<sup>Required</sup> <a name="originGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups"></a>

```typescript
public readonly originGroups: string[];
```

- *Type:* string[]

---

##### `protectionSettings`<sup>Required</sup> <a name="protectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings"></a>

```typescript
public readonly protectionSettings: DataOciWaasWaasPolicyWafConfigProtectionSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a>

---

##### `whitelists`<sup>Required</sup> <a name="whitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists"></a>

```typescript
public readonly whitelists: DataOciWaasWaasPolicyWafConfigWhitelistsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a>

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsList <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction">blockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode">blockErrorPageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription">blockErrorPageDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage">blockErrorPageMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode">blockResponseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected">isResponseInspected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount">maxArgumentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument">maxNameLengthPerArgument</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB">maxResponseSizeInKiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments">maxTotalNameLengthOfArguments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes">mediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays">recommendationsPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string[];
```

- *Type:* string[]

---

##### `blockAction`<sup>Required</sup> <a name="blockAction" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction"></a>

```typescript
public readonly blockAction: string;
```

- *Type:* string

---

##### `blockErrorPageCode`<sup>Required</sup> <a name="blockErrorPageCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode"></a>

```typescript
public readonly blockErrorPageCode: string;
```

- *Type:* string

---

##### `blockErrorPageDescription`<sup>Required</sup> <a name="blockErrorPageDescription" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription"></a>

```typescript
public readonly blockErrorPageDescription: string;
```

- *Type:* string

---

##### `blockErrorPageMessage`<sup>Required</sup> <a name="blockErrorPageMessage" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage"></a>

```typescript
public readonly blockErrorPageMessage: string;
```

- *Type:* string

---

##### `blockResponseCode`<sup>Required</sup> <a name="blockResponseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode"></a>

```typescript
public readonly blockResponseCode: number;
```

- *Type:* number

---

##### `isResponseInspected`<sup>Required</sup> <a name="isResponseInspected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected"></a>

```typescript
public readonly isResponseInspected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxArgumentCount`<sup>Required</sup> <a name="maxArgumentCount" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount"></a>

```typescript
public readonly maxArgumentCount: number;
```

- *Type:* number

---

##### `maxNameLengthPerArgument`<sup>Required</sup> <a name="maxNameLengthPerArgument" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument"></a>

```typescript
public readonly maxNameLengthPerArgument: number;
```

- *Type:* number

---

##### `maxResponseSizeInKiB`<sup>Required</sup> <a name="maxResponseSizeInKiB" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB"></a>

```typescript
public readonly maxResponseSizeInKiB: number;
```

- *Type:* number

---

##### `maxTotalNameLengthOfArguments`<sup>Required</sup> <a name="maxTotalNameLengthOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments"></a>

```typescript
public readonly maxTotalNameLengthOfArguments: number;
```

- *Type:* number

---

##### `mediaTypes`<sup>Required</sup> <a name="mediaTypes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes"></a>

```typescript
public readonly mediaTypes: string[];
```

- *Type:* string[]

---

##### `recommendationsPeriodInDays`<sup>Required</sup> <a name="recommendationsPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays"></a>

```typescript
public readonly recommendationsPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigProtectionSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a>

---


### DataOciWaasWaasPolicyWafConfigWhitelistsList <a name="DataOciWaasWaasPolicyWafConfigWhitelistsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get"></a>

```typescript
public get(index: number): DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference <a name="DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasWaasPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists">addressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `addressLists`<sup>Required</sup> <a name="addressLists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists"></a>

```typescript
public readonly addressLists: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasWaasPolicyWafConfigWhitelists;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a>

---



