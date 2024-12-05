# `dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins oci_computeinstanceagent_instance_available_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins(scope: Construct, id: string, config: DataOciComputeinstanceagentInstanceAvailablePluginsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig">DataOciComputeinstanceagentInstanceAvailablePluginsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig">DataOciComputeinstanceagentInstanceAvailablePluginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciComputeinstanceagentInstanceAvailablePluginsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAvailablePlugins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeinstanceagentInstanceAvailablePlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAvailablePlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins">availablePlugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput">osNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput">osVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName">osName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availablePlugins`<sup>Required</sup> <a name="availablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins"></a>

```typescript
public readonly availablePlugins: DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter"></a>

```typescript
public readonly filter: DataOciComputeinstanceagentInstanceAvailablePluginsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciComputeinstanceagentInstanceAvailablePluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osNameInput`<sup>Optional</sup> <a name="osNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput"></a>

```typescript
public readonly osNameInput: string;
```

- *Type:* string

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput"></a>

```typescript
public readonly osVersionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName"></a>

```typescript
public readonly osName: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins: dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins = { ... }
```


### DataOciComputeinstanceagentInstanceAvailablePluginsConfig <a name="DataOciComputeinstanceagentInstanceAvailablePluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeinstanceagentInstanceAvailablePluginsConfig: dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName">osName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion">osVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}.

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName"></a>

```typescript
public readonly osName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}.

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciComputeinstanceagentInstanceAvailablePluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#filter DataOciComputeinstanceagentInstanceAvailablePlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

### DataOciComputeinstanceagentInstanceAvailablePluginsFilter <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeinstanceagentInstanceAvailablePluginsFilter: dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get"></a>

```typescript
public get(index: number): DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault">isEnabledByDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported">isSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledByDefault`<sup>Required</sup> <a name="isEnabledByDefault" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault"></a>

```typescript
public readonly isEnabledByDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSupported`<sup>Required</sup> <a name="isSupported" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported"></a>

```typescript
public readonly isSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a>

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get"></a>

```typescript
public get(index: number): DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciComputeinstanceagentInstanceAvailablePluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>[]

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciComputeinstanceagentInstanceAvailablePlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciComputeinstanceagentInstanceAvailablePluginsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>

---



