# `dataOciUsageProxySubscriptionRedemptions` Submodule <a name="`dataOciUsageProxySubscriptionRedemptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionRedemptions <a name="DataOciUsageProxySubscriptionRedemptions" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions oci_usage_proxy_subscription_redemptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions(scope: Construct, id: string, config: DataOciUsageProxySubscriptionRedemptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig">DataOciUsageProxySubscriptionRedemptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig">DataOciUsageProxySubscriptionRedemptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedGreaterThanOrEqualTo">resetTimeRedeemedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedLessThan">resetTimeRedeemedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciUsageProxySubscriptionRedemptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeRedeemedGreaterThanOrEqualTo` <a name="resetTimeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeRedeemedGreaterThanOrEqualTo(): void
```

##### `resetTimeRedeemedLessThan` <a name="resetTimeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedLessThan"></a>

```typescript
public resetTimeRedeemedLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isConstruct"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformElement"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformDataSource"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciUsageProxySubscriptionRedemptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciUsageProxySubscriptionRedemptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionRedemptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList">DataOciUsageProxySubscriptionRedemptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.redemptionCollection">redemptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualToInput">timeRedeemedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThanInput">timeRedeemedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualTo">timeRedeemedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThan">timeRedeemedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filter"></a>

```typescript
public readonly filter: DataOciUsageProxySubscriptionRedemptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList">DataOciUsageProxySubscriptionRedemptionsFilterList</a>

---

##### `redemptionCollection`<sup>Required</sup> <a name="redemptionCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.redemptionCollection"></a>

```typescript
public readonly redemptionCollection: DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciUsageProxySubscriptionRedemptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `timeRedeemedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeRedeemedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeRedeemedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeRedeemedLessThanInput`<sup>Optional</sup> <a name="timeRedeemedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThanInput"></a>

```typescript
public readonly timeRedeemedLessThanInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `timeRedeemedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeRedeemedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeRedeemedLessThan`<sup>Required</sup> <a name="timeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThan"></a>

```typescript
public readonly timeRedeemedLessThan: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionRedemptionsConfig <a name="DataOciUsageProxySubscriptionRedemptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedemptionsConfig: dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#subscription_id DataOciUsageProxySubscriptionRedemptions#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#tenancy_id DataOciUsageProxySubscriptionRedemptions#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#id DataOciUsageProxySubscriptionRedemptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedGreaterThanOrEqualTo">timeRedeemedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemptions#time_redeemed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedLessThan">timeRedeemedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_less_than DataOciUsageProxySubscriptionRedemptions#time_redeemed_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#subscription_id DataOciUsageProxySubscriptionRedemptions#subscription_id}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#tenancy_id DataOciUsageProxySubscriptionRedemptions#tenancy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciUsageProxySubscriptionRedemptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#filter DataOciUsageProxySubscriptionRedemptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#id DataOciUsageProxySubscriptionRedemptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeRedeemedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeRedeemedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemptions#time_redeemed_greater_than_or_equal_to}.

---

##### `timeRedeemedLessThan`<sup>Optional</sup> <a name="timeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedLessThan"></a>

```typescript
public readonly timeRedeemedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_less_than DataOciUsageProxySubscriptionRedemptions#time_redeemed_less_than}.

---

### DataOciUsageProxySubscriptionRedemptionsFilter <a name="DataOciUsageProxySubscriptionRedemptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedemptionsFilter: dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#name DataOciUsageProxySubscriptionRedemptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#values DataOciUsageProxySubscriptionRedemptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#regex DataOciUsageProxySubscriptionRedemptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#name DataOciUsageProxySubscriptionRedemptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#values DataOciUsageProxySubscriptionRedemptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#regex DataOciUsageProxySubscriptionRedemptions#regex}.

---

### DataOciUsageProxySubscriptionRedemptionsRedemptionCollection <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedemptionsRedemptionCollection: dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection = { ... }
```


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems: dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems = { ... }
```


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems: dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionRedemptionsFilterList <a name="DataOciUsageProxySubscriptionRedemptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedemptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciUsageProxySubscriptionRedemptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>[]

---


### DataOciUsageProxySubscriptionRedemptionsFilterOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciUsageProxySubscriptionRedemptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter">DataOciUsageProxySubscriptionRedemptionsFilter</a>

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.baseRewards">baseRewards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fxRate">fxRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceCurrency">invoiceCurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceNumber">invoiceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceTotalAmount">invoiceTotalAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redeemedRewards">redeemedRewards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionCode">redemptionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionEmail">redemptionEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeInvoiced">timeInvoiced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeRedeemed">timeRedeemed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseRewards`<sup>Required</sup> <a name="baseRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.baseRewards"></a>

```typescript
public readonly baseRewards: number;
```

- *Type:* number

---

##### `fxRate`<sup>Required</sup> <a name="fxRate" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fxRate"></a>

```typescript
public readonly fxRate: number;
```

- *Type:* number

---

##### `invoiceCurrency`<sup>Required</sup> <a name="invoiceCurrency" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceCurrency"></a>

```typescript
public readonly invoiceCurrency: string;
```

- *Type:* string

---

##### `invoiceNumber`<sup>Required</sup> <a name="invoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceNumber"></a>

```typescript
public readonly invoiceNumber: string;
```

- *Type:* string

---

##### `invoiceTotalAmount`<sup>Required</sup> <a name="invoiceTotalAmount" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceTotalAmount"></a>

```typescript
public readonly invoiceTotalAmount: number;
```

- *Type:* number

---

##### `redeemedRewards`<sup>Required</sup> <a name="redeemedRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redeemedRewards"></a>

```typescript
public readonly redeemedRewards: number;
```

- *Type:* number

---

##### `redemptionCode`<sup>Required</sup> <a name="redemptionCode" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionCode"></a>

```typescript
public readonly redemptionCode: string;
```

- *Type:* string

---

##### `redemptionEmail`<sup>Required</sup> <a name="redemptionEmail" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionEmail"></a>

```typescript
public readonly redemptionEmail: string;
```

- *Type:* string

---

##### `timeInvoiced`<sup>Required</sup> <a name="timeInvoiced" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeInvoiced"></a>

```typescript
public readonly timeInvoiced: string;
```

- *Type:* string

---

##### `timeRedeemed`<sup>Required</sup> <a name="timeRedeemed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeRedeemed"></a>

```typescript
public readonly timeRedeemed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems</a>

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems</a>

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedemptions } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection">DataOciUsageProxySubscriptionRedemptionsRedemptionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxySubscriptionRedemptionsRedemptionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection">DataOciUsageProxySubscriptionRedemptionsRedemptionCollection</a>

---



