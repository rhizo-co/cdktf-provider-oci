# `dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState` Submodule <a name="`dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state oci_data_safe_security_policy_deployment_security_policy_entry_state}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.deploymentStatus">deploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.entryDetails">entryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryId">securityPolicyEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentIdInput">securityPolicyDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateIdInput">securityPolicyEntryStateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentId">securityPolicyDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateId">securityPolicyEntryStateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deploymentStatus`<sup>Required</sup> <a name="deploymentStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.deploymentStatus"></a>

```typescript
public readonly deploymentStatus: string;
```

- *Type:* string

---

##### `entryDetails`<sup>Required</sup> <a name="entryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.entryDetails"></a>

```typescript
public readonly entryDetails: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList</a>

---

##### `securityPolicyEntryId`<sup>Required</sup> <a name="securityPolicyEntryId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryId"></a>

```typescript
public readonly securityPolicyEntryId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityPolicyDeploymentIdInput`<sup>Optional</sup> <a name="securityPolicyDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentIdInput"></a>

```typescript
public readonly securityPolicyDeploymentIdInput: string;
```

- *Type:* string

---

##### `securityPolicyEntryStateIdInput`<sup>Optional</sup> <a name="securityPolicyEntryStateIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateIdInput"></a>

```typescript
public readonly securityPolicyEntryStateIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityPolicyDeploymentId`<sup>Required</sup> <a name="securityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyDeploymentId"></a>

```typescript
public readonly securityPolicyDeploymentId: string;
```

- *Type:* string

---

##### `securityPolicyEntryStateId`<sup>Required</sup> <a name="securityPolicyEntryStateId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.securityPolicyEntryStateId"></a>

```typescript
public readonly securityPolicyEntryStateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig: dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyDeploymentId">securityPolicyDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyEntryStateId">securityPolicyEntryStateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_entry_state_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_entry_state_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityPolicyDeploymentId`<sup>Required</sup> <a name="securityPolicyDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyDeploymentId"></a>

```typescript
public readonly securityPolicyDeploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_deployment_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_deployment_id}.

---

##### `securityPolicyEntryStateId`<sup>Required</sup> <a name="securityPolicyEntryStateId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.securityPolicyEntryStateId"></a>

```typescript
public readonly securityPolicyEntryStateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#security_policy_entry_state_id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#security_policy_entry_state_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_deployment_security_policy_entry_state#id DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails: dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference <a name="DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.entryType">entryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeGenerated">timeGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.entryType"></a>

```typescript
public readonly entryType: string;
```

- *Type:* string

---

##### `timeGenerated`<sup>Required</sup> <a name="timeGenerated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeGenerated"></a>

```typescript
public readonly timeGenerated: string;
```

- *Type:* string

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.timeStatusUpdated"></a>

```typescript
public readonly timeStatusUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryState.DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails">DataOciDataSafeSecurityPolicyDeploymentSecurityPolicyEntryStateEntryDetails</a>

---



