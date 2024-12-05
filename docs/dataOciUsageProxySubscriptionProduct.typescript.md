# `dataOciUsageProxySubscriptionProduct` Submodule <a name="`dataOciUsageProxySubscriptionProduct` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionProduct <a name="DataOciUsageProxySubscriptionProduct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product oci_usage_proxy_subscription_product}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct(scope: Construct, id: string, config: DataOciUsageProxySubscriptionProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig">DataOciUsageProxySubscriptionProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig">DataOciUsageProxySubscriptionProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetProducttype">resetProducttype</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProducttype` <a name="resetProducttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetProducttype"></a>

```typescript
public resetProducttype(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionProduct resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciUsageProxySubscriptionProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciUsageProxySubscriptionProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList">DataOciUsageProxySubscriptionProductItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttypeInput">producttypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKeyInput">usagePeriodKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttype">producttype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKey">usagePeriodKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.items"></a>

```typescript
public readonly items: DataOciUsageProxySubscriptionProductItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList">DataOciUsageProxySubscriptionProductItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `producttypeInput`<sup>Optional</sup> <a name="producttypeInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttypeInput"></a>

```typescript
public readonly producttypeInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `usagePeriodKeyInput`<sup>Optional</sup> <a name="usagePeriodKeyInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKeyInput"></a>

```typescript
public readonly usagePeriodKeyInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `producttype`<sup>Required</sup> <a name="producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttype"></a>

```typescript
public readonly producttype: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `usagePeriodKey`<sup>Required</sup> <a name="usagePeriodKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKey"></a>

```typescript
public readonly usagePeriodKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionProductConfig <a name="DataOciUsageProxySubscriptionProductConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionProductConfig: dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.usagePeriodKey">usagePeriodKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.producttype">producttype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}.

---

##### `usagePeriodKey`<sup>Required</sup> <a name="usagePeriodKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.usagePeriodKey"></a>

```typescript
public readonly usagePeriodKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `producttype`<sup>Optional</sup> <a name="producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.producttype"></a>

```typescript
public readonly producttype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}.

---

### DataOciUsageProxySubscriptionProductItems <a name="DataOciUsageProxySubscriptionProductItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionProductItems: dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionProductItemsList <a name="DataOciUsageProxySubscriptionProductItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionProductItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxySubscriptionProductItemsOutputReference <a name="DataOciUsageProxySubscriptionProductItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionProduct } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.earnedRewards">earnedRewards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.isEligibleToEarnRewards">isEligibleToEarnRewards</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productNumber">productNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.usageAmount">usageAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems">DataOciUsageProxySubscriptionProductItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `earnedRewards`<sup>Required</sup> <a name="earnedRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.earnedRewards"></a>

```typescript
public readonly earnedRewards: number;
```

- *Type:* number

---

##### `isEligibleToEarnRewards`<sup>Required</sup> <a name="isEligibleToEarnRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.isEligibleToEarnRewards"></a>

```typescript
public readonly isEligibleToEarnRewards: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `productName`<sup>Required</sup> <a name="productName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `productNumber`<sup>Required</sup> <a name="productNumber" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productNumber"></a>

```typescript
public readonly productNumber: string;
```

- *Type:* string

---

##### `usageAmount`<sup>Required</sup> <a name="usageAmount" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.usageAmount"></a>

```typescript
public readonly usageAmount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxySubscriptionProductItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems">DataOciUsageProxySubscriptionProductItems</a>

---



