# `dataOciAnnouncementsServiceAnnouncementSubscriptions` Submodule <a name="`dataOciAnnouncementsServiceAnnouncementSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptions <a name="DataOciAnnouncementsServiceAnnouncementSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions oci_announcements_service_announcement_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions(scope: Construct, id: string, config: DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig">DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAnnouncementsServiceAnnouncementSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAnnouncementsServiceAnnouncementSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnnouncementsServiceAnnouncementSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.announcementSubscriptionCollection">announcementSubscriptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `announcementSubscriptionCollection`<sup>Required</sup> <a name="announcementSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.announcementSubscriptionCollection"></a>

```typescript
public readonly announcementSubscriptionCollection: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filter"></a>

```typescript
public readonly filter: DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection: dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection = { ... }
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems: dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems = { ... }
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups: dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups = { ... }
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters: dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters = { ... }
```


### DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionsConfig: dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#compartment_id DataOciAnnouncementsServiceAnnouncementSubscriptions#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#display_name DataOciAnnouncementsServiceAnnouncementSubscriptions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#filter DataOciAnnouncementsServiceAnnouncementSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#id DataOciAnnouncementsServiceAnnouncementSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#state DataOciAnnouncementsServiceAnnouncementSubscriptions#state}.

---

### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciAnnouncementsServiceAnnouncementSubscriptionsFilter: dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#name DataOciAnnouncementsServiceAnnouncementSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#values DataOciAnnouncementsServiceAnnouncementSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#regex DataOciAnnouncementsServiceAnnouncementSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#name DataOciAnnouncementsServiceAnnouncementSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#values DataOciAnnouncementsServiceAnnouncementSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_announcement_subscriptions#regex DataOciAnnouncementsServiceAnnouncementSubscriptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get"></a>

```typescript
public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFilters</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get"></a>

```typescript
public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.filters"></a>

```typescript
public readonly filters: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsFiltersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroups</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.filterGroups">filterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.onsTopicId">onsTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredTimeZone">preferredTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `filterGroups`<sup>Required</sup> <a name="filterGroups" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.filterGroups"></a>

```typescript
public readonly filterGroups: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsFilterGroupsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.onsTopicId"></a>

```typescript
public readonly onsTopicId: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `preferredTimeZone`<sup>Required</sup> <a name="preferredTimeZone" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.preferredTimeZone"></a>

```typescript
public readonly preferredTimeZone: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItems</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get"></a>

```typescript
public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection">DataOciAnnouncementsServiceAnnouncementSubscriptionsAnnouncementSubscriptionCollection</a>

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>[]

---


### DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference <a name="DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAnnouncementsServiceAnnouncementSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceAnnouncementSubscriptions.DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter">DataOciAnnouncementsServiceAnnouncementSubscriptionsFilter</a>

---



