# `dataOciJmsJmsPlugins` Submodule <a name="`dataOciJmsJmsPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJmsPlugins <a name="DataOciJmsJmsPlugins" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins oci_jms_jms_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJmsPlugins.DataOciJmsJmsPlugins(scope: Construct, id: string, config?: DataOciJmsJmsPluginsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig">DataOciJmsJmsPluginsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig">DataOciJmsJmsPluginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFleetId">resetFleetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetHostnameContains">resetHostnameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeLastSeenLessThanOrEqualTo">resetTimeLastSeenLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeRegisteredLessThanOrEqualTo">resetTimeRegisteredLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciJmsJmsPluginsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>[]

---

##### `resetAgentId` <a name="resetAgentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAgentId"></a>

```typescript
public resetAgentId(): void
```

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAvailabilityStatus"></a>

```typescript
public resetAvailabilityStatus(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFleetId` <a name="resetFleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFleetId"></a>

```typescript
public resetFleetId(): void
```

##### `resetHostnameContains` <a name="resetHostnameContains" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetHostnameContains"></a>

```typescript
public resetHostnameContains(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeLastSeenLessThanOrEqualTo` <a name="resetTimeLastSeenLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeLastSeenLessThanOrEqualTo"></a>

```typescript
public resetTimeLastSeenLessThanOrEqualTo(): void
```

##### `resetTimeRegisteredLessThanOrEqualTo` <a name="resetTimeRegisteredLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeRegisteredLessThanOrEqualTo"></a>

```typescript
public resetTimeRegisteredLessThanOrEqualTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJmsPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isConstruct"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformElement"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformDataSource"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsJmsPlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsJmsPlugins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsJmsPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJmsPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList">DataOciJmsJmsPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.jmsPluginCollection">jmsPluginCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList">DataOciJmsJmsPluginsJmsPluginCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContainsInput">hostnameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualToInput">timeLastSeenLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualToInput">timeRegisteredLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContains">hostnameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualTo">timeLastSeenLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualTo">timeRegisteredLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filter"></a>

```typescript
public readonly filter: DataOciJmsJmsPluginsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList">DataOciJmsJmsPluginsFilterList</a>

---

##### `jmsPluginCollection`<sup>Required</sup> <a name="jmsPluginCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.jmsPluginCollection"></a>

```typescript
public readonly jmsPluginCollection: DataOciJmsJmsPluginsJmsPluginCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList">DataOciJmsJmsPluginsJmsPluginCollectionList</a>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatusInput"></a>

```typescript
public readonly availabilityStatusInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciJmsJmsPluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>[]

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `hostnameContainsInput`<sup>Optional</sup> <a name="hostnameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContainsInput"></a>

```typescript
public readonly hostnameContainsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeLastSeenLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLastSeenLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualToInput"></a>

```typescript
public readonly timeLastSeenLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeRegisteredLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeRegisteredLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualToInput"></a>

```typescript
public readonly timeRegisteredLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `hostnameContains`<sup>Required</sup> <a name="hostnameContains" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContains"></a>

```typescript
public readonly hostnameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeLastSeenLessThanOrEqualTo`<sup>Required</sup> <a name="timeLastSeenLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualTo"></a>

```typescript
public readonly timeLastSeenLessThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeRegisteredLessThanOrEqualTo`<sup>Required</sup> <a name="timeRegisteredLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualTo"></a>

```typescript
public readonly timeRegisteredLessThanOrEqualTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJmsPluginsConfig <a name="DataOciJmsJmsPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJmsPluginsConfig: dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#agent_id DataOciJmsJmsPlugins#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#availability_status DataOciJmsJmsPlugins#availability_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id DataOciJmsJmsPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id_in_subtree DataOciJmsJmsPlugins#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#fleet_id DataOciJmsJmsPlugins#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.hostnameContains">hostnameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#hostname_contains DataOciJmsJmsPlugins#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#id DataOciJmsJmsPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#state DataOciJmsJmsPlugins#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeLastSeenLessThanOrEqualTo">timeLastSeenLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_last_seen_less_than_or_equal_to DataOciJmsJmsPlugins#time_last_seen_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeRegisteredLessThanOrEqualTo">timeRegisteredLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_registered_less_than_or_equal_to DataOciJmsJmsPlugins#time_registered_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#agent_id DataOciJmsJmsPlugins#agent_id}.

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#availability_status DataOciJmsJmsPlugins#availability_status}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id DataOciJmsJmsPlugins#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id_in_subtree DataOciJmsJmsPlugins#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciJmsJmsPluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#filter DataOciJmsJmsPlugins#filter}

---

##### `fleetId`<sup>Optional</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#fleet_id DataOciJmsJmsPlugins#fleet_id}.

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.hostnameContains"></a>

```typescript
public readonly hostnameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#hostname_contains DataOciJmsJmsPlugins#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#id DataOciJmsJmsPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#state DataOciJmsJmsPlugins#state}.

---

##### `timeLastSeenLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLastSeenLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeLastSeenLessThanOrEqualTo"></a>

```typescript
public readonly timeLastSeenLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_last_seen_less_than_or_equal_to DataOciJmsJmsPlugins#time_last_seen_less_than_or_equal_to}.

---

##### `timeRegisteredLessThanOrEqualTo`<sup>Optional</sup> <a name="timeRegisteredLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeRegisteredLessThanOrEqualTo"></a>

```typescript
public readonly timeRegisteredLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_registered_less_than_or_equal_to DataOciJmsJmsPlugins#time_registered_less_than_or_equal_to}.

---

### DataOciJmsJmsPluginsFilter <a name="DataOciJmsJmsPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJmsPluginsFilter: dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#name DataOciJmsJmsPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#values DataOciJmsJmsPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#regex DataOciJmsJmsPlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#name DataOciJmsJmsPlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#values DataOciJmsJmsPlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#regex DataOciJmsJmsPlugins#regex}.

---

### DataOciJmsJmsPluginsJmsPluginCollection <a name="DataOciJmsJmsPluginsJmsPluginCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJmsPluginsJmsPluginCollection: dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection = { ... }
```


### DataOciJmsJmsPluginsJmsPluginCollectionItems <a name="DataOciJmsJmsPluginsJmsPluginCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsJmsPluginsJmsPluginCollectionItems: dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJmsPluginsFilterList <a name="DataOciJmsJmsPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.get"></a>

```typescript
public get(index: number): DataOciJmsJmsPluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsJmsPluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>[]

---


### DataOciJmsJmsPluginsFilterOutputReference <a name="DataOciJmsJmsPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsJmsPluginsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>

---


### DataOciJmsJmsPluginsJmsPluginCollectionItemsList <a name="DataOciJmsJmsPluginsJmsPluginCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference <a name="DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentType">agentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osArchitecture">osArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osDistribution">osDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeLastSeen">timeLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeRegistered">timeRegistered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems">DataOciJmsJmsPluginsJmsPluginCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentType"></a>

```typescript
public readonly agentType: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `osArchitecture`<sup>Required</sup> <a name="osArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osArchitecture"></a>

```typescript
public readonly osArchitecture: string;
```

- *Type:* string

---

##### `osDistribution`<sup>Required</sup> <a name="osDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osDistribution"></a>

```typescript
public readonly osDistribution: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeLastSeen`<sup>Required</sup> <a name="timeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeLastSeen"></a>

```typescript
public readonly timeLastSeen: string;
```

- *Type:* string

---

##### `timeRegistered`<sup>Required</sup> <a name="timeRegistered" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeRegistered"></a>

```typescript
public readonly timeRegistered: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJmsPluginsJmsPluginCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems">DataOciJmsJmsPluginsJmsPluginCollectionItems</a>

---


### DataOciJmsJmsPluginsJmsPluginCollectionList <a name="DataOciJmsJmsPluginsJmsPluginCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.get"></a>

```typescript
public get(index: number): DataOciJmsJmsPluginsJmsPluginCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsJmsPluginsJmsPluginCollectionOutputReference <a name="DataOciJmsJmsPluginsJmsPluginCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciJmsJmsPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList">DataOciJmsJmsPluginsJmsPluginCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection">DataOciJmsJmsPluginsJmsPluginCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsJmsPluginsJmsPluginCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList">DataOciJmsJmsPluginsJmsPluginCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsJmsPluginsJmsPluginCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection">DataOciJmsJmsPluginsJmsPluginCollection</a>

---



