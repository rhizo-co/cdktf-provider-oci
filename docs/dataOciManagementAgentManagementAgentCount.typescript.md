# `dataOciManagementAgentManagementAgentCount` Submodule <a name="`dataOciManagementAgentManagementAgentCount` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentCount <a name="DataOciManagementAgentManagementAgentCount" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count oci_management_agent_management_agent_count}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentCountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig">DataOciManagementAgentManagementAgentCountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig">DataOciManagementAgentManagementAgentCountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetHasPlugins">resetHasPlugins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetInstallType">resetInstallType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetHasPlugins` <a name="resetHasPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetHasPlugins"></a>

```typescript
public resetHasPlugins(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallType` <a name="resetInstallType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.resetInstallType"></a>

```typescript
public resetInstallType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentCount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isConstruct"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformElement"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformDataSource"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.generateConfigForImport"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentCount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentCount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList">DataOciManagementAgentManagementAgentCountItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.groupByInput">groupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.hasPluginsInput">hasPluginsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.installTypeInput">installTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.hasPlugins">hasPlugins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.installType">installType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.items"></a>

```typescript
public readonly items: DataOciManagementAgentManagementAgentCountItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList">DataOciManagementAgentManagementAgentCountItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.groupByInput"></a>

```typescript
public readonly groupByInput: string[];
```

- *Type:* string[]

---

##### `hasPluginsInput`<sup>Optional</sup> <a name="hasPluginsInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.hasPluginsInput"></a>

```typescript
public readonly hasPluginsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installTypeInput`<sup>Optional</sup> <a name="installTypeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.installTypeInput"></a>

```typescript
public readonly installTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `hasPlugins`<sup>Required</sup> <a name="hasPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.hasPlugins"></a>

```typescript
public readonly hasPlugins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installType`<sup>Required</sup> <a name="installType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.installType"></a>

```typescript
public readonly installType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentCountConfig <a name="DataOciManagementAgentManagementAgentCountConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentCountConfig: dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#compartment_id DataOciManagementAgentManagementAgentCount#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.groupBy">groupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#group_by DataOciManagementAgentManagementAgentCount#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.hasPlugins">hasPlugins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#has_plugins DataOciManagementAgentManagementAgentCount#has_plugins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#id DataOciManagementAgentManagementAgentCount#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.installType">installType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#install_type DataOciManagementAgentManagementAgentCount#install_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#compartment_id DataOciManagementAgentManagementAgentCount#compartment_id}.

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#group_by DataOciManagementAgentManagementAgentCount#group_by}.

---

##### `hasPlugins`<sup>Optional</sup> <a name="hasPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.hasPlugins"></a>

```typescript
public readonly hasPlugins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#has_plugins DataOciManagementAgentManagementAgentCount#has_plugins}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#id DataOciManagementAgentManagementAgentCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installType`<sup>Optional</sup> <a name="installType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountConfig.property.installType"></a>

```typescript
public readonly installType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_count#install_type DataOciManagementAgentManagementAgentCount#install_type}.

---

### DataOciManagementAgentManagementAgentCountItems <a name="DataOciManagementAgentManagementAgentCountItems" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItems.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentCountItems: dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItems = { ... }
```


### DataOciManagementAgentManagementAgentCountItemsDimensions <a name="DataOciManagementAgentManagementAgentCountItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensions.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentCountItemsDimensions: dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentCountItemsDimensionsList <a name="DataOciManagementAgentManagementAgentCountItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference <a name="DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.hasPlugins">hasPlugins</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.installType">installType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.platformType">platformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensions">DataOciManagementAgentManagementAgentCountItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `hasPlugins`<sup>Required</sup> <a name="hasPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.hasPlugins"></a>

```typescript
public readonly hasPlugins: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `installType`<sup>Required</sup> <a name="installType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.installType"></a>

```typescript
public readonly installType: string;
```

- *Type:* string

---

##### `platformType`<sup>Required</sup> <a name="platformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.platformType"></a>

```typescript
public readonly platformType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentCountItemsDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensions">DataOciManagementAgentManagementAgentCountItemsDimensions</a>

---


### DataOciManagementAgentManagementAgentCountItemsList <a name="DataOciManagementAgentManagementAgentCountItemsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentCountItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentCountItemsOutputReference <a name="DataOciManagementAgentManagementAgentCountItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentCount } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList">DataOciManagementAgentManagementAgentCountItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItems">DataOciManagementAgentManagementAgentCountItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciManagementAgentManagementAgentCountItemsDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsDimensionsList">DataOciManagementAgentManagementAgentCountItemsDimensionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentCountItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentCount.DataOciManagementAgentManagementAgentCountItems">DataOciManagementAgentManagementAgentCountItems</a>

---



