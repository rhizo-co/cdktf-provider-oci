# `dataOciCoreAppCatalogSubscriptions` Submodule <a name="`dataOciCoreAppCatalogSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreAppCatalogSubscriptions <a name="DataOciCoreAppCatalogSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions oci_core_app_catalog_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions(scope: Construct, id: string, config: DataOciCoreAppCatalogSubscriptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig">DataOciCoreAppCatalogSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig">DataOciCoreAppCatalogSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetListingId">resetListingId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreAppCatalogSubscriptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListingId` <a name="resetListingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetListingId"></a>

```typescript
public resetListingId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreAppCatalogSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isConstruct"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformElement"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformDataSource"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreAppCatalogSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreAppCatalogSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreAppCatalogSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreAppCatalogSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.appCatalogSubscriptions">appCatalogSubscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList">DataOciCoreAppCatalogSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appCatalogSubscriptions`<sup>Required</sup> <a name="appCatalogSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.appCatalogSubscriptions"></a>

```typescript
public readonly appCatalogSubscriptions: DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filter"></a>

```typescript
public readonly filter: DataOciCoreAppCatalogSubscriptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList">DataOciCoreAppCatalogSubscriptionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreAppCatalogSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions <a name="DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions: dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions = { ... }
```


### DataOciCoreAppCatalogSubscriptionsConfig <a name="DataOciCoreAppCatalogSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreAppCatalogSubscriptionsConfig: dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#compartment_id DataOciCoreAppCatalogSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#id DataOciCoreAppCatalogSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#listing_id DataOciCoreAppCatalogSubscriptions#listing_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#compartment_id DataOciCoreAppCatalogSubscriptions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreAppCatalogSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#filter DataOciCoreAppCatalogSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#id DataOciCoreAppCatalogSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listingId`<sup>Optional</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#listing_id DataOciCoreAppCatalogSubscriptions#listing_id}.

---

### DataOciCoreAppCatalogSubscriptionsFilter <a name="DataOciCoreAppCatalogSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreAppCatalogSubscriptionsFilter: dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#name DataOciCoreAppCatalogSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#values DataOciCoreAppCatalogSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#regex DataOciCoreAppCatalogSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#name DataOciCoreAppCatalogSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#values DataOciCoreAppCatalogSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#regex DataOciCoreAppCatalogSubscriptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList <a name="DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.get"></a>

```typescript
public get(index: number): DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference <a name="DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.eulaLink">eulaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceId">listingResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceVersion">listingResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.oracleTermsOfUseLink">oracleTermsOfUseLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.publisherName">publisherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeRetrieved">timeRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `eulaLink`<sup>Required</sup> <a name="eulaLink" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.eulaLink"></a>

```typescript
public readonly eulaLink: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `listingResourceId`<sup>Required</sup> <a name="listingResourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceId"></a>

```typescript
public readonly listingResourceId: string;
```

- *Type:* string

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceVersion"></a>

```typescript
public readonly listingResourceVersion: string;
```

- *Type:* string

---

##### `oracleTermsOfUseLink`<sup>Required</sup> <a name="oracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.oracleTermsOfUseLink"></a>

```typescript
public readonly oracleTermsOfUseLink: string;
```

- *Type:* string

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.publisherName"></a>

```typescript
public readonly publisherName: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeRetrieved`<sup>Required</sup> <a name="timeRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeRetrieved"></a>

```typescript
public readonly timeRetrieved: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions</a>

---


### DataOciCoreAppCatalogSubscriptionsFilterList <a name="DataOciCoreAppCatalogSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreAppCatalogSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreAppCatalogSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>[]

---


### DataOciCoreAppCatalogSubscriptionsFilterOutputReference <a name="DataOciCoreAppCatalogSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreAppCatalogSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreAppCatalogSubscriptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>

---



