# `dataOciUsageProxySubscriptionRedeemableUsers` Submodule <a name="`dataOciUsageProxySubscriptionRedeemableUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionRedeemableUsers <a name="DataOciUsageProxySubscriptionRedeemableUsers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users oci_usage_proxy_subscription_redeemable_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers(scope: Construct, id: string, config: DataOciUsageProxySubscriptionRedeemableUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig">DataOciUsageProxySubscriptionRedeemableUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig">DataOciUsageProxySubscriptionRedeemableUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciUsageProxySubscriptionRedeemableUsersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedeemableUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isConstruct"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformElement"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformDataSource"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedeemableUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciUsageProxySubscriptionRedeemableUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciUsageProxySubscriptionRedeemableUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionRedeemableUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList">DataOciUsageProxySubscriptionRedeemableUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.redeemableUserCollection">redeemableUserCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filter"></a>

```typescript
public readonly filter: DataOciUsageProxySubscriptionRedeemableUsersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList">DataOciUsageProxySubscriptionRedeemableUsersFilterList</a>

---

##### `redeemableUserCollection`<sup>Required</sup> <a name="redeemableUserCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.redeemableUserCollection"></a>

```typescript
public readonly redeemableUserCollection: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciUsageProxySubscriptionRedeemableUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionRedeemableUsersConfig <a name="DataOciUsageProxySubscriptionRedeemableUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedeemableUsersConfig: dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#subscription_id DataOciUsageProxySubscriptionRedeemableUsers#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#tenancy_id DataOciUsageProxySubscriptionRedeemableUsers#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#id DataOciUsageProxySubscriptionRedeemableUsers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#subscription_id DataOciUsageProxySubscriptionRedeemableUsers#subscription_id}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#tenancy_id DataOciUsageProxySubscriptionRedeemableUsers#tenancy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciUsageProxySubscriptionRedeemableUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#filter DataOciUsageProxySubscriptionRedeemableUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#id DataOciUsageProxySubscriptionRedeemableUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciUsageProxySubscriptionRedeemableUsersFilter <a name="DataOciUsageProxySubscriptionRedeemableUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedeemableUsersFilter: dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#name DataOciUsageProxySubscriptionRedeemableUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#values DataOciUsageProxySubscriptionRedeemableUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#regex DataOciUsageProxySubscriptionRedeemableUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#name DataOciUsageProxySubscriptionRedeemableUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#values DataOciUsageProxySubscriptionRedeemableUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#regex DataOciUsageProxySubscriptionRedeemableUsers#regex}.

---

### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection: dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection = { ... }
```


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems: dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems = { ... }
```


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems: dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionRedeemableUsersFilterList <a name="DataOciUsageProxySubscriptionRedeemableUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciUsageProxySubscriptionRedeemableUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>[]

---


### DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciUsageProxySubscriptionRedeemableUsersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.emailId">emailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailId`<sup>Required</sup> <a name="emailId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.emailId"></a>

```typescript
public readonly emailId: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems</a>

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList</a>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems</a>

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.get"></a>

```typescript
public get(index: number): DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxySubscriptionRedeemableUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection</a>

---



