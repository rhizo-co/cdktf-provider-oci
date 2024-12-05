# `dataOciOnesubscriptionSubscriptions` Submodule <a name="`dataOciOnesubscriptionSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscriptions <a name="DataOciOnesubscriptionSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions oci_onesubscription_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions(scope: Construct, id: string, config: DataOciOnesubscriptionSubscriptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig">DataOciOnesubscriptionSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig">DataOciOnesubscriptionSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetBuyerEmail">resetBuyerEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetIsCommitInfoRequired">resetIsCommitInfoRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetPlanNumber">resetPlanNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOnesubscriptionSubscriptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>[]

---

##### `resetBuyerEmail` <a name="resetBuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetBuyerEmail"></a>

```typescript
public resetBuyerEmail(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCommitInfoRequired` <a name="resetIsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetIsCommitInfoRequired"></a>

```typescript
public resetIsCommitInfoRequired(): void
```

##### `resetPlanNumber` <a name="resetPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetPlanNumber"></a>

```typescript
public resetPlanNumber(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList">DataOciOnesubscriptionSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptions">subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList">DataOciOnesubscriptionSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmailInput">buyerEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequiredInput">isCommitInfoRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumberInput">planNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmail">buyerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequired">isCommitInfoRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumber">planNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filter"></a>

```typescript
public readonly filter: DataOciOnesubscriptionSubscriptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList">DataOciOnesubscriptionSubscriptionsFilterList</a>

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptions"></a>

```typescript
public readonly subscriptions: DataOciOnesubscriptionSubscriptionsSubscriptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList">DataOciOnesubscriptionSubscriptionsSubscriptionsList</a>

---

##### `buyerEmailInput`<sup>Optional</sup> <a name="buyerEmailInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmailInput"></a>

```typescript
public readonly buyerEmailInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOnesubscriptionSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCommitInfoRequiredInput`<sup>Optional</sup> <a name="isCommitInfoRequiredInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequiredInput"></a>

```typescript
public readonly isCommitInfoRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `planNumberInput`<sup>Optional</sup> <a name="planNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumberInput"></a>

```typescript
public readonly planNumberInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `buyerEmail`<sup>Required</sup> <a name="buyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.buyerEmail"></a>

```typescript
public readonly buyerEmail: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCommitInfoRequired`<sup>Required</sup> <a name="isCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.isCommitInfoRequired"></a>

```typescript
public readonly isCommitInfoRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `planNumber`<sup>Required</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.planNumber"></a>

```typescript
public readonly planNumber: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscriptionsConfig <a name="DataOciOnesubscriptionSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscriptionsConfig: dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#compartment_id DataOciOnesubscriptionSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.buyerEmail">buyerEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#buyer_email DataOciOnesubscriptionSubscriptions#buyer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#id DataOciOnesubscriptionSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.isCommitInfoRequired">isCommitInfoRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#is_commit_info_required DataOciOnesubscriptionSubscriptions#is_commit_info_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.planNumber">planNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#plan_number DataOciOnesubscriptionSubscriptions#plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#subscription_id DataOciOnesubscriptionSubscriptions#subscription_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#compartment_id DataOciOnesubscriptionSubscriptions#compartment_id}.

---

##### `buyerEmail`<sup>Optional</sup> <a name="buyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.buyerEmail"></a>

```typescript
public readonly buyerEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#buyer_email DataOciOnesubscriptionSubscriptions#buyer_email}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOnesubscriptionSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#filter DataOciOnesubscriptionSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#id DataOciOnesubscriptionSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCommitInfoRequired`<sup>Optional</sup> <a name="isCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.isCommitInfoRequired"></a>

```typescript
public readonly isCommitInfoRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#is_commit_info_required DataOciOnesubscriptionSubscriptions#is_commit_info_required}.

---

##### `planNumber`<sup>Optional</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.planNumber"></a>

```typescript
public readonly planNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#plan_number DataOciOnesubscriptionSubscriptions#plan_number}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#subscription_id DataOciOnesubscriptionSubscriptions#subscription_id}.

---

### DataOciOnesubscriptionSubscriptionsFilter <a name="DataOciOnesubscriptionSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscriptionsFilter: dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#name DataOciOnesubscriptionSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#values DataOciOnesubscriptionSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#regex DataOciOnesubscriptionSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#name DataOciOnesubscriptionSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#values DataOciOnesubscriptionSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscriptions#regex DataOciOnesubscriptionSubscriptions#regex}.

---

### DataOciOnesubscriptionSubscriptionsSubscriptions <a name="DataOciOnesubscriptionSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscriptionsSubscriptions: dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions = { ... }
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscriptionsSubscriptionsCurrency: dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency = { ... }
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices: dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices = { ... }
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices: dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices = { ... }
```


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct: dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscriptionsFilterList <a name="DataOciOnesubscriptionSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>[]

---


### DataOciOnesubscriptionSubscriptionsFilterOutputReference <a name="DataOciOnesubscriptionSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionSubscriptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsFilter">DataOciOnesubscriptionSubscriptionsFilter</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">isoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">stdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isoCode`<sup>Required</sup> <a name="isoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```typescript
public readonly isoCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stdPrecision`<sup>Required</sup> <a name="stdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```typescript
public readonly stdPrecision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.holdReason">holdReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices">subscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeHoldReleaseEta">timeHoldReleaseEta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions">DataOciOnesubscriptionSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOnesubscriptionSubscriptionsSubscriptionsCurrencyList</a>

---

##### `holdReason`<sup>Required</sup> <a name="holdReason" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.holdReason"></a>

```typescript
public readonly holdReason: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subscribedServices`<sup>Required</sup> <a name="subscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices"></a>

```typescript
public readonly subscribedServices: DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a>

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeHoldReleaseEta`<sup>Required</sup> <a name="timeHoldReleaseEta" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeHoldReleaseEta"></a>

```typescript
public readonly timeHoldReleaseEta: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscriptionsSubscriptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptions">DataOciOnesubscriptionSubscriptionsSubscriptions</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">lineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `lineNetAmount`<sup>Required</sup> <a name="lineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```typescript
public readonly lineNetAmount: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber">bookingOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices">commitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi">csi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion">dataCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber">orderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.originalPromoAmount">originalPromoAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType">partnerTransactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel">pricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType">programType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue">termValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom">termValueUom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue">totalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.usedAmount">usedAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `bookingOptyNumber`<sup>Required</sup> <a name="bookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```typescript
public readonly bookingOptyNumber: string;
```

- *Type:* string

---

##### `commitmentServices`<sup>Required</sup> <a name="commitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices"></a>

```typescript
public readonly commitmentServices: DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a>

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi"></a>

```typescript
public readonly csi: string;
```

- *Type:* string

---

##### `dataCenterRegion`<sup>Required</sup> <a name="dataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```typescript
public readonly dataCenterRegion: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber"></a>

```typescript
public readonly orderNumber: string;
```

- *Type:* string

---

##### `originalPromoAmount`<sup>Required</sup> <a name="originalPromoAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.originalPromoAmount"></a>

```typescript
public readonly originalPromoAmount: string;
```

- *Type:* string

---

##### `partnerTransactionType`<sup>Required</sup> <a name="partnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```typescript
public readonly partnerTransactionType: string;
```

- *Type:* string

---

##### `pricingModel`<sup>Required</sup> <a name="pricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel"></a>

```typescript
public readonly pricingModel: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a>

---

##### `programType`<sup>Required</sup> <a name="programType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType"></a>

```typescript
public readonly programType: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `termValue`<sup>Required</sup> <a name="termValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue"></a>

```typescript
public readonly termValue: string;
```

- *Type:* string

---

##### `termValueUom`<sup>Required</sup> <a name="termValueUom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom"></a>

```typescript
public readonly termValueUom: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `totalValue`<sup>Required</sup> <a name="totalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue"></a>

```typescript
public readonly totalValue: string;
```

- *Type:* string

---

##### `usedAmount`<sup>Required</sup> <a name="usedAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.usedAmount"></a>

```typescript
public readonly usedAmount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServices</a>

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference <a name="DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscriptions.DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOnesubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a>

---



