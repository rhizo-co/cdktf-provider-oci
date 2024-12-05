# `dataOciCoreInstancePoolLoadBalancerAttachment` Submodule <a name="`dataOciCoreInstancePoolLoadBalancerAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachment <a name="DataOciCoreInstancePoolLoadBalancerAttachment" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment oci_core_instance_pool_load_balancer_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer"></a>

```typescript
import { dataOciCoreInstancePoolLoadBalancerAttachment } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment(scope: Construct, id: string, config: DataOciCoreInstancePoolLoadBalancerAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig">DataOciCoreInstancePoolLoadBalancerAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig">DataOciCoreInstancePoolLoadBalancerAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct"></a>

```typescript
import { dataOciCoreInstancePoolLoadBalancerAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement"></a>

```typescript
import { dataOciCoreInstancePoolLoadBalancerAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource"></a>

```typescript
import { dataOciCoreInstancePoolLoadBalancerAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport"></a>

```typescript
import { dataOciCoreInstancePoolLoadBalancerAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreInstancePoolLoadBalancerAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreInstancePoolLoadBalancerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstancePoolLoadBalancerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName">backendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection">vnicSelection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput">instancePoolLoadBalancerAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId">instancePoolLoadBalancerAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName"></a>

```typescript
public readonly backendSetName: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vnicSelection`<sup>Required</sup> <a name="vnicSelection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection"></a>

```typescript
public readonly vnicSelection: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput"></a>

```typescript
public readonly instancePoolIdInput: string;
```

- *Type:* string

---

##### `instancePoolLoadBalancerAttachmentIdInput`<sup>Optional</sup> <a name="instancePoolLoadBalancerAttachmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput"></a>

```typescript
public readonly instancePoolLoadBalancerAttachmentIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

---

##### `instancePoolLoadBalancerAttachmentId`<sup>Required</sup> <a name="instancePoolLoadBalancerAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId"></a>

```typescript
public readonly instancePoolLoadBalancerAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachmentConfig <a name="DataOciCoreInstancePoolLoadBalancerAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.Initializer"></a>

```typescript
import { dataOciCoreInstancePoolLoadBalancerAttachment } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreInstancePoolLoadBalancerAttachmentConfig: dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId">instancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId">instancePoolLoadBalancerAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId"></a>

```typescript
public readonly instancePoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}.

---

##### `instancePoolLoadBalancerAttachmentId`<sup>Required</sup> <a name="instancePoolLoadBalancerAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId"></a>

```typescript
public readonly instancePoolLoadBalancerAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



