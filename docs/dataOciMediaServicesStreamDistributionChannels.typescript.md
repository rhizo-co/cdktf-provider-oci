# `dataOciMediaServicesStreamDistributionChannels` Submodule <a name="`dataOciMediaServicesStreamDistributionChannels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamDistributionChannels <a name="DataOciMediaServicesStreamDistributionChannels" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels oci_media_services_stream_distribution_channels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels(scope: Construct, id: string, config?: DataOciMediaServicesStreamDistributionChannelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig">DataOciMediaServicesStreamDistributionChannelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig">DataOciMediaServicesStreamDistributionChannelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMediaServicesStreamDistributionChannelsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesStreamDistributionChannels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesStreamDistributionChannels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamDistributionChannels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection">streamDistributionChannelCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter"></a>

```typescript
public readonly filter: DataOciMediaServicesStreamDistributionChannelsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a>

---

##### `streamDistributionChannelCollection`<sup>Required</sup> <a name="streamDistributionChannelCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection"></a>

```typescript
public readonly streamDistributionChannelCollection: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMediaServicesStreamDistributionChannelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamDistributionChannelsConfig <a name="DataOciMediaServicesStreamDistributionChannelsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamDistributionChannelsConfig: dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMediaServicesStreamDistributionChannelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#filter DataOciMediaServicesStreamDistributionChannels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}.

---

### DataOciMediaServicesStreamDistributionChannelsFilter <a name="DataOciMediaServicesStreamDistributionChannelsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamDistributionChannelsFilter: dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}.

---

### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection: dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection = { ... }
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems: dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems = { ... }
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks: dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamDistributionChannelsFilterList <a name="DataOciMediaServicesStreamDistributionChannelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamDistributionChannelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesStreamDistributionChannelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>[]

---


### DataOciMediaServicesStreamDistributionChannelsFilterOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesStreamDistributionChannelsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamDistributionChannels } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a>

---



