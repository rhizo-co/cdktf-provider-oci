# `dataOciLoadBalancerLoadBalancerRoutingPolicy` Submodule <a name="`dataOciLoadBalancerLoadBalancerRoutingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicy <a name="DataOciLoadBalancerLoadBalancerRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy oci_load_balancer_load_balancer_routing_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy(scope: Construct, id: string, config: DataOciLoadBalancerLoadBalancerRoutingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig">DataOciLoadBalancerLoadBalancerRoutingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig">DataOciLoadBalancerLoadBalancerRoutingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancerRoutingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerLoadBalancerRoutingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancerRoutingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion">conditionLanguageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyNameInput">routingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyName">routingPolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `conditionLanguageVersion`<sup>Required</sup> <a name="conditionLanguageVersion" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion"></a>

```typescript
public readonly conditionLanguageVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.rules"></a>

```typescript
public readonly rules: DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `routingPolicyNameInput`<sup>Optional</sup> <a name="routingPolicyNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyNameInput"></a>

```typescript
public readonly routingPolicyNameInput: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `routingPolicyName`<sup>Required</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyName"></a>

```typescript
public readonly routingPolicyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicyConfig <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPolicyConfig: dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.routingPolicyName">routingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `routingPolicyName`<sup>Required</sup> <a name="routingPolicyName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.routingPolicyName"></a>

```typescript
public readonly routingPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}.

---

### DataOciLoadBalancerLoadBalancerRoutingPolicyRules <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPolicyRules: dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules = { ... }
```


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions: dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName">backendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName"></a>

```typescript
public readonly backendSetName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get"></a>

```typescript
public get(index: number): DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer"></a>

```typescript
import { dataOciLoadBalancerLoadBalancerRoutingPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules">DataOciLoadBalancerLoadBalancerRoutingPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions"></a>

```typescript
public readonly actions: DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLoadBalancerLoadBalancerRoutingPolicyRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules">DataOciLoadBalancerLoadBalancerRoutingPolicyRules</a>

---



