# `dataOciOspGatewaySubscriptions` Submodule <a name="`dataOciOspGatewaySubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewaySubscriptions <a name="DataOciOspGatewaySubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions oci_osp_gateway_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions(scope: Construct, id: string, config: DataOciOspGatewaySubscriptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig">DataOciOspGatewaySubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig">DataOciOspGatewaySubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOspGatewaySubscriptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOspGatewaySubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOspGatewaySubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewaySubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection">subscriptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter"></a>

```typescript
public readonly filter: DataOciOspGatewaySubscriptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a>

---

##### `subscriptionCollection`<sup>Required</sup> <a name="subscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection"></a>

```typescript
public readonly subscriptionCollection: DataOciOspGatewaySubscriptionsSubscriptionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOspGatewaySubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput"></a>

```typescript
public readonly ospHomeRegionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewaySubscriptionsConfig <a name="DataOciOspGatewaySubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsConfig: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOspGatewaySubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#filter DataOciOspGatewaySubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewaySubscriptionsFilter <a name="DataOciOspGatewaySubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsFilter: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}.

---

### DataOciOspGatewaySubscriptionsSubscriptionCollection <a name="DataOciOspGatewaySubscriptionsSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollection: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItems <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItems: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo = { ... }
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo: dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewaySubscriptionsFilterList <a name="DataOciOspGatewaySubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOspGatewaySubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>[]

---


### DataOciOspGatewaySubscriptionsFilterOutputReference <a name="DataOciOspGatewaySubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOspGatewaySubscriptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter">DataOciOspGatewaySubscriptionsFilter</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1">line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2">line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3">line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4">line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId">billToCustAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode">gsiOrgCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType">planType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState">upgradeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress"></a>

```typescript
public readonly billingAddress: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a>

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId"></a>

```typescript
public readonly billToCustAccountId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode"></a>

```typescript
public readonly gsiOrgCode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway"></a>

```typescript
public readonly paymentGateway: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions"></a>

```typescript
public readonly paymentOptions: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a>

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType"></a>

```typescript
public readonly planType: string;
```

- *Type:* string

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId"></a>

```typescript
public readonly shipToCustAcctRoleId: string;
```

- *Type:* string

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId"></a>

```typescript
public readonly shipToCustAcctSiteId: string;
```

- *Type:* string

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription"></a>

```typescript
public readonly subscription: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber"></a>

```typescript
public readonly subscriptionPlanNumber: string;
```

- *Type:* string

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo"></a>

```typescript
public readonly taxInfo: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a>

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv"></a>

```typescript
public readonly timePersonalToCorporateConv: string;
```

- *Type:* string

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade"></a>

```typescript
public readonly timePlanUpgrade: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState"></a>

```typescript
public readonly upgradeState: string;
```

- *Type:* string

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails"></a>

```typescript
public readonly upgradeStateDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```typescript
public readonly merchantDefinedData: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType"></a>

```typescript
public readonly creditCardType: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```typescript
public readonly extBillingAgreementId: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits"></a>

```typescript
public readonly lastDigits: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard"></a>

```typescript
public readonly nameOnCard: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration"></a>

```typescript
public readonly timeExpiration: string;
```

- *Type:* string

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```typescript
public readonly walletInstrumentId: string;
```

- *Type:* string

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId"></a>

```typescript
public readonly walletTransactionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId">billToCustAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode">gsiOrgCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType">planType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState">upgradeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress"></a>

```typescript
public readonly billingAddress: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a>

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId"></a>

```typescript
public readonly billToCustAccountId: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode"></a>

```typescript
public readonly gsiOrgCode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway"></a>

```typescript
public readonly paymentGateway: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions"></a>

```typescript
public readonly paymentOptions: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a>

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType"></a>

```typescript
public readonly planType: string;
```

- *Type:* string

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```typescript
public readonly shipToCustAcctRoleId: string;
```

- *Type:* string

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```typescript
public readonly shipToCustAcctSiteId: string;
```

- *Type:* string

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```typescript
public readonly subscriptionPlanNumber: string;
```

- *Type:* string

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo"></a>

```typescript
public readonly taxInfo: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a>

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```typescript
public readonly timePersonalToCorporateConv: string;
```

- *Type:* string

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade"></a>

```typescript
public readonly timePlanUpgrade: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState"></a>

```typescript
public readonly upgradeState: string;
```

- *Type:* string

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails"></a>

```typescript
public readonly upgradeStateDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```typescript
public readonly merchantDefinedData: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```typescript
public readonly creditCardType: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```typescript
public readonly extBillingAgreementId: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```typescript
public readonly lastDigits: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```typescript
public readonly nameOnCard: string;
```

- *Type:* string

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```typescript
public readonly paymentMethod: string;
```

- *Type:* string

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```typescript
public readonly timeExpiration: string;
```

- *Type:* string

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```typescript
public readonly walletInstrumentId: string;
```

- *Type:* string

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```typescript
public readonly walletTransactionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```typescript
public readonly noTaxReasonCode: string;
```

- *Type:* string

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```typescript
public readonly noTaxReasonCodeDetails: string;
```

- *Type:* string

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```typescript
public readonly taxCnpj: string;
```

- *Type:* string

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```typescript
public readonly taxPayerId: string;
```

- *Type:* string

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```typescript
public readonly taxRegNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro">giro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `giro`<sup>Required</sup> <a name="giro" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro"></a>

```typescript
public readonly giro: string;
```

- *Type:* string

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode"></a>

```typescript
public readonly noTaxReasonCode: string;
```

- *Type:* string

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```typescript
public readonly noTaxReasonCodeDetails: string;
```

- *Type:* string

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj"></a>

```typescript
public readonly taxCnpj: string;
```

- *Type:* string

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId"></a>

```typescript
public readonly taxPayerId: string;
```

- *Type:* string

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber"></a>

```typescript
public readonly taxRegNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get"></a>

```typescript
public get(index: number): DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOspGatewaySubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOspGatewaySubscriptionsSubscriptionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a>

---



