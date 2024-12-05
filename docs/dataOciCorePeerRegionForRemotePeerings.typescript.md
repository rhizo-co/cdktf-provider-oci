# `dataOciCorePeerRegionForRemotePeerings` Submodule <a name="`dataOciCorePeerRegionForRemotePeerings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCorePeerRegionForRemotePeerings <a name="DataOciCorePeerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings oci_core_peer_region_for_remote_peerings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

new dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings(scope: Construct, id: string, config?: DataOciCorePeerRegionForRemotePeeringsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig">DataOciCorePeerRegionForRemotePeeringsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig">DataOciCorePeerRegionForRemotePeeringsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCorePeerRegionForRemotePeeringsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCorePeerRegionForRemotePeerings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCorePeerRegionForRemotePeerings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCorePeerRegionForRemotePeerings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCorePeerRegionForRemotePeerings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCorePeerRegionForRemotePeerings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList">DataOciCorePeerRegionForRemotePeeringsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.peerRegionForRemotePeerings">peerRegionForRemotePeerings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filter"></a>

```typescript
public readonly filter: DataOciCorePeerRegionForRemotePeeringsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList">DataOciCorePeerRegionForRemotePeeringsFilterList</a>

---

##### `peerRegionForRemotePeerings`<sup>Required</sup> <a name="peerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.peerRegionForRemotePeerings"></a>

```typescript
public readonly peerRegionForRemotePeerings: DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCorePeerRegionForRemotePeeringsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCorePeerRegionForRemotePeeringsConfig <a name="DataOciCorePeerRegionForRemotePeeringsConfig" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

const dataOciCorePeerRegionForRemotePeeringsConfig: dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCorePeerRegionForRemotePeeringsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#filter DataOciCorePeerRegionForRemotePeerings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCorePeerRegionForRemotePeeringsFilter <a name="DataOciCorePeerRegionForRemotePeeringsFilter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

const dataOciCorePeerRegionForRemotePeeringsFilter: dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#name DataOciCorePeerRegionForRemotePeerings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#values DataOciCorePeerRegionForRemotePeerings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#regex DataOciCorePeerRegionForRemotePeerings#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#name DataOciCorePeerRegionForRemotePeerings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#values DataOciCorePeerRegionForRemotePeerings#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#regex DataOciCorePeerRegionForRemotePeerings#regex}.

---

### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

const dataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings: dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCorePeerRegionForRemotePeeringsFilterList <a name="DataOciCorePeerRegionForRemotePeeringsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

new dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get"></a>

```typescript
public get(index: number): DataOciCorePeerRegionForRemotePeeringsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCorePeerRegionForRemotePeeringsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>[]

---


### DataOciCorePeerRegionForRemotePeeringsFilterOutputReference <a name="DataOciCorePeerRegionForRemotePeeringsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

new dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCorePeerRegionForRemotePeeringsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter">DataOciCorePeerRegionForRemotePeeringsFilter</a>

---


### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

new dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get"></a>

```typescript
public get(index: number): DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer"></a>

```typescript
import { dataOciCorePeerRegionForRemotePeerings } from 'rhizo-co-terraform-provider-oci'

new dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings</a>

---



