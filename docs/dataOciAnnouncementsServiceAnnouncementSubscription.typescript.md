# `dataOciAnnouncementsServiceAnnouncementSubscription` Submodule <a name="`dataOciAnnouncementsServiceAnnouncementSubscription` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscription <a name="DataOciAnnouncementsServiceAnnouncementSubscription" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription(scope: Construct, id: string, config: DataOciAnnouncementsServiceAnnouncementSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isConstruct"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformElement"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformDataSource"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAnnouncementsServiceAnnouncementSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAnnouncementsServiceAnnouncementSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnnouncementsServiceAnnouncementSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.filterGroups">filterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.onsTopicId">onsTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone">preferredTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionIdInput">announcementSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionId">announcementSubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filterGroups`<sup>Required</sup> <a name="filterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.filterGroups"></a>

```typescript
public readonly filterGroups: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.onsTopicId"></a>

```typescript
public readonly onsTopicId: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `preferredTimeZone`<sup>Required</sup> <a name="preferredTimeZone" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone"></a>

```typescript
public readonly preferredTimeZone: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `announcementSubscriptionIdInput`<sup>Optional</sup> <a name="announcementSubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionIdInput"></a>

```typescript
public readonly announcementSubscriptionIdInput: string;
```

- *Type:* string

---

##### `announcementSubscriptionId`<sup>Required</sup> <a name="announcementSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.announcementSubscriptionId"></a>

```typescript
public readonly announcementSubscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionConfig <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionConfig" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionConfig: dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.announcementSubscriptionId">announcementSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription#announcement_subscription_id DataOciAnnouncementsServiceAnnouncementSubscription#announcement_subscription_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `announcementSubscriptionId`<sup>Required</sup> <a name="announcementSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionConfig.property.announcementSubscriptionId"></a>

```typescript
public readonly announcementSubscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscription#announcement_subscription_id DataOciAnnouncementsServiceAnnouncementSubscription#announcement_subscription_id}.

---

### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups: dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups = { ... }
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters: dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get"></a>

```typescript
public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.get"></a>

```typescript
public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters"></a>

```typescript
public readonly filters: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscription.DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---



